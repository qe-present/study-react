import Home from "../pages/Home.jsx";
import Events from "../pages/Events.jsx";
import EventDetail,{action as deleteEvent } from "../pages/EventDetail.jsx";
import NewEvent from "../pages/NewEvent.jsx";
import EditEvent from "../pages/EditEvent.jsx";
import Root from "../pages/Root.jsx";
import EventRoot from "../pages/EventRoot.jsx";
import EventLoader from "./loader/EventLoader.jsx";
import Error from "../pages/Error.jsx";
import EventOne from "./loader/EventOne.jsx";
import {action as manipulateEventAction}  from '../components/EventForm.jsx'
const routes = [
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children:[
            {
                index:true,
                element:<Home />,
            },
            {
                path: 'events',
                element: <EventRoot />,
                children:[
                    {
                        index:true,
                        element: <Events/>,
                        loader:EventLoader
                    },
                    {
                        path: ':id',
                        id:'event',
                        loader:EventOne,
                        children:[
                            {
                                index:true,
                                element: <EventDetail />,
                                action:deleteEvent
                            },
                            {
                                path: 'edit',
                                element: <EditEvent />,
                                action:manipulateEventAction
                            }
                        ]
                    },
                    {
                        path: 'new',
                        element: <NewEvent />,
                        action:manipulateEventAction
                    }
                    ]
            }

        ]
    }
]
export default routes;