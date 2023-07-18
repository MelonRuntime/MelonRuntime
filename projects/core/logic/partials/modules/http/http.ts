//Logic imports
import { request, requestAsync, fetch, app, $static, result } from "logic/partials/modules/http/http-basic-core"

const http = {
    _apps: {},
    request,
    requestAsync,
    app,
    result,
    static: $static,
    fetch
}

export { http }