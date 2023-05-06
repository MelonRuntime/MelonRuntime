import { _crypto } from "../../statics/_crypto";
import { _log } from "../console/_log";

enum EventCaller {
    System,
    Cronjob,
    User
}

enum EventType {
    LocalInputOutput,
    RemoteInputOutput,
    InteropTransaction
}

class EventChain {
    private static events: Map<string, Event>;

    static startNew(caller: EventCaller, type: EventType, actions: Function[]) {
        const name = _crypto.randomUUID();
        const event = new Event(name, caller, type, actions);
        this.events.set(name, event);
        this.events.get(name).run();
    }
}

class Event {
    private name: string;
    private actions: Function[];
    private type: EventType;
    private caller: EventCaller;
    private finished: boolean;
    private modificationObject: any;

    get isFinished() {
        return this.finished;
    }

    get eventName() {
        return this.name;
    }

    get eventType() {
        return this.type;
    }

    get eventCaller() {
        return this.caller;
    }

    constructor(name: string, caller: EventCaller, type: EventType, actions: Function[]) {
        this.name = name;
        this.actions = actions;
        this.type = type;
        this.caller = caller;
    }

    async run<T>(): Promise<T> {
        if (!this.actions.length || this.finished) {
            return this.modificationObject as T;
        }

        const nextAction = this.actions.shift();
        const actionWrapper = () => {
            this.modificationObject = nextAction(this.modificationObject);
        }

        const promise = new Promise(resolve => resolve(actionWrapper()));
        await promise;
        await this.run<T>();
    }

    finish() {
        this.finished = true;
    } 
}

export { Event, EventCaller, EventType, EventChain }