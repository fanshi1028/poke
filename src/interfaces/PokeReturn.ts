import PokeResult from './PokeResult'
import * as http from 'http'
import { WriteStream } from 'node:fs'


export default interface PokeReturn {
    req: http.ClientRequest|undefined,
    promise : () => Promise<PokeResult>,
    // abort request
    abort : () => void,
    // event listeners
    on: (eventName:'data'|'error'|'response'|'end', callback:(result?:any) => void) => PokeReturn,
    /* ----- stream ----- */
    pipe: (writableStream:WriteStream) => void,
}