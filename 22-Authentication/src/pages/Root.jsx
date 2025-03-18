import MainNavigation from "../components/MainNavigation.jsx";
import {Outlet, useLoaderData, useSubmit} from "react-router";
import {useEffect} from "react";
import {getDuration} from "../util/auth.js";

export default function Root() {
   const token=useLoaderData()
    const submit=useSubmit()
    useEffect(() => {
        if(!token){
            return;
        }
        if(token==='EXPIRED'){
            submit(null,{action:'/logout',method:'post'})
            return;
        }
        const duration=getDuration()
        console.log(duration)
        setTimeout(()=>{
            submit(null,{action:'/logout',method:'post'})
        },duration)
    }, [token,submit]);
    return(
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}