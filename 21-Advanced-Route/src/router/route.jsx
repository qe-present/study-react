import Home from "../pages/Home.jsx";
import Events from "../pages/Events.jsx";
import EventDetail from "../pages/EventDetail.jsx";
import NewEvent from "../pages/NewEvent.jsx";
import EditEvent from "../pages/EditEvent.jsx";
import Root from "../pages/Root.jsx";
import EventRoot from "../pages/EventRoot.jsx";

const routes = [
    {
        path: '/',
        element: <Root />,
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
                        loader:async ()=>{
                            const response = await fetch('http://localhost:8080/events');
                            if (!response.ok) {
                                // throw new Error('Fetching events failed.');
                            } else {
                                const resData = await response.json();
                                return resData.events;
                            }

                        }
                    },
                    {
                        path: ':id',
                        element: <EventDetail />,
                    },
                    {
                        path: ':id/edit',
                        element: <EditEvent />,
                    },
                    {
                        path: 'new',
                        element: <NewEvent />,
                    }
                    ]
            }

        ]
    }
]
export default routes;