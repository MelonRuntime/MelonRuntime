/// <reference path="../Constructors/PingResponse.d.ts" />
/// <reference path="../Constructors/MResponse.d.ts" />
/// <reference path="../Constructors/HttpApplication.d.ts" />

type ImageExtension = "png" | "gif" | "jpeg" | "jpg" | "png" | "svg+xml" | "webp"
type AudioExtension = "wave" | "wav" | "x-wav" | "x-pn-wav" | "webm" | "ogg"
type VideoExtension = "x-flv" | "mp4" | "x-msvideo" | "mpeg" | "ogg" | "webm" | "mp2t" | "3gpp" | "3ggp2"

type MSimpleResponse<R, MT extends string> = {
    type: MT,
    status: number,
    response: R
}

type Http = {
    request: (target: string, method: string, body: string, headers: string) => MResponse,
    ping: (target: string, times: number) => PingResponse,
    app: (options: {name: string, host: string, port: string, enableHttps?: boolean}) => HttpApplication,
    result: (statusCode: number, response?: any) => {
        type: string,
        status: number,
        response: string
    }
    static: <R, MT>(response: R, type: string) => MSimpleResponse<R, MT>
    image: <R, EX extends ImageExtension>(response: R, extension: EX) => MSimpleResponse<R, `image/${EX}`>
    audio: <R, EX extends AudioExtension>(response: R, extension: EX) => MSimpleResponse<R, `audio/${EX}`>
    video: <R, EX extends ImageExtension>(response: R, extension: EX) => MSimpleResponse<R, `video/${EX}`>
    pdf: <R>(response: R) => MSimpleResponse<R, 'application/pdf'>
}

declare const http: Http