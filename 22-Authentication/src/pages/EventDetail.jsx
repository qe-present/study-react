import {redirect, useRouteLoaderData} from "react-router";
import EventItem from "../components/EventItem.jsx";
import {getAuthToken} from "../util/auth.js";

export default function EventDetail() {
    const data = useRouteLoaderData('event')
    return (
        <>
            <EventItem event={data.event}/>
        </>
    )
}

export async function action({params, request}) {
    console.log(params.id)

    const response = await fetch('http://localhost:8080/events/' + params.id, {
        method: request.method,
        headers:{
            'Authorization': `Bearer ${getAuthToken()}`
        }

    })
    if (!response.ok) {
        throw new Response(JSON.stringify({
                message: 'Could not fetch details for selected event.'
            }),
            {
                status: 500
            }
        )
    }
    return redirect('/events')

}