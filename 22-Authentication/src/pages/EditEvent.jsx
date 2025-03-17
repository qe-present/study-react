import EventForm from "../components/EventForm.jsx";
import {useRouteLoaderData} from "react-router-dom";

export default function EditEvent(){
    const data=useRouteLoaderData('event')
    return <EventForm method="patch" event={data.event}/>
}