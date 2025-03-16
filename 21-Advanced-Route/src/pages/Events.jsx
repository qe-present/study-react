import EventsList from '../components/EventsList';
import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

function EventsPage() {
    const {events}=useLoaderData()
    return (
        <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
        <Await resolve={events}>
            {(loadedEvents)=><EventsList events={loadedEvents}/>}
        </Await>
        </Suspense>
    )
}

export default EventsPage;
