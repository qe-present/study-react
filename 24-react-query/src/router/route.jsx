import Events from "../components/Events/Events.jsx";
import NewEvent from "../components/Events/NewEvent.jsx";
import EventDetails from "../components/Events/EventDetails.jsx";
import EditEvent from "../components/Events/EditEvent.jsx";
import {Navigate} from "react-router";

const route =[
    {
        path: '/',
        element: <Navigate to="/events" />,
    },
    {
        path: '/events',
        element: <Events />,

        children: [
            {
                path: '/events/new',
                element: <NewEvent />,
            },
        ],
    },
    {
        path: '/events/:id',
        element: <EventDetails />,
        children: [
            {
                path: '/events/:id/edit',
                element: <EditEvent />,
            },
        ],
    },
];
export default route;