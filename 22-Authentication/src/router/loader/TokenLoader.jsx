import {getAuthToken} from "../../util/auth.js";

export default function TokenLoader(){
    return  getAuthToken()
}