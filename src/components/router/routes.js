import Chat from "../chat"
import Login from "../login"
import { CHAT, LOGIN } from "./router"


export const publicRoute  = [
    {
        path: LOGIN,
        Component : <Login/>
    }
]


export const privateRoute  = [
    {
        path: CHAT,
        Component : <Chat/>
    }
]