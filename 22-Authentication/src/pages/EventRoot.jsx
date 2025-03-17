import EventsNavigation from "../components/EventsNavigation.jsx";
import {Outlet} from "react-router";

export default function EventRoot(){
    return(
        <>
            <EventsNavigation />
            <Outlet/>
        </>
    )
}
