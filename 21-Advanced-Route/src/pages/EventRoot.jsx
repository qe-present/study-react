import EventsNavigation from "../components/EventsNavigation.jsx";
import {Outlet} from "react-router-dom";

export default function EventRoot(){
    return(
        <>
            <EventsNavigation />
            <Outlet/>
        </>
    )
}
