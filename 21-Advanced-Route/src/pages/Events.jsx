import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {
    const data=useLoaderData()
    const events = data.events;
    if(data.isError){
        return <p>Something went wrong</p>
    }
    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export default EventsPage;
