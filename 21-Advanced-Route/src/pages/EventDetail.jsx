import {Outlet, useParams} from "react-router-dom";

export default function EventDetail(){
    console.log('EventDetail Component');
    const params=useParams()
    console.log('params:',params)

    return(
        <>
            <h1>EventDetail</h1>
            <p>Event ID:{params.id}</p>
        </>
    )
}