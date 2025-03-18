import {getAuthToken} from "../../util/auth.js";
import {redirect} from "react-router";

export default function CheckToken(){
    const token = getAuthToken();
    if(!token){
        redirect('/auth');
    }
}