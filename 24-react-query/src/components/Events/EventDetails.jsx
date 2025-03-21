import {Link, Outlet, useNavigate, useParams} from 'react-router';

import Header from '../Header.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteEvent, fetchEvent, queryClient} from "../../util/http.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import {useState} from "react";
import Modal from "../UI/Modal.jsx";


export default function EventDetails() {
    const [isDeleteing, setIsDeleteing] = useState(false);
    const {id} = useParams()
    const navigate = useNavigate();
    const {data, isPending, isError, error} = useQuery({
        queryKey: ['event', id],
        queryFn: ({signal}) => fetchEvent({id, signal}),
    })
    const {
        mutate,
        isPending: isPendingDeletion,
        isError: isErrorDeleting,
        error: errorDeleting
    } = useMutation({
        mutationFn: deleteEvent,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['events'],
                refetchType: 'none'
            })
            navigate('/events');
        },
    })
    const handlesStartDelete = () => {
        setIsDeleteing(true)
    }
    const handlesEndDelete = () => {
        setIsDeleteing(false)
    }
    const handleDelete = () => {
        mutate({
            id
        })
    }
    let content;
    if (isPending) {
        content = <div id="event-details-content" className="center">
            <p>fetching event data</p>
        </div>
    }
    if (isError) {
        content = <div id="event-details-content" className="center">
            <ErrorBlock message={error.info?.message || "please try again"} title="failed to fetch event"/>
        </div>
    }
    if (data) {
        const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        content = (
            <>
                <header>
                    <h1>{data.title}</h1>
                    <nav>
                        <button onClick={handlesStartDelete}>Delete</button>
                        <Link to="edit">Edit</Link>
                    </nav>
                </header>
                <div id="event-details-content">
                    <img src={`http://localhost:3000/${data.image}`} alt={data.title}/>
                    <div id="event-details-info">
                        <div>
                            <p id="event-details-location">{data.location}</p>
                            <time dateTime={`Todo-DateT$Todo-Time`}>
                                {formattedDate} @ {data.time}</time>
                        </div>
                        <p id="event-details-description">{data.description}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {isDeleteing && <Modal onClose={handlesStartDelete}>
                <h2> Are you sure?</h2>
                <p>Do you want to delete this event?</p>
                <div className="form-actions">
                    {isPendingDeletion && <p>Deleting...</p>}
                    {!isPendingDeletion && (
                        <>
                            <button onClick={handleDelete} className="button">Delete</button>
                            <button onClick={handlesEndDelete} className="button-text">Cancel</button>
                        </>
                    )}
                </div>
                {isErrorDeleting && <ErrorBlock message={errorDeleting.info?.message || "please try again"}
                                                 title="failed to delete event"/>}
            </Modal>
            }
            <Outlet/>
            <Header>
                <Link to="/events" className="nav-item">
                    View all Events
                </Link>
            </Header>
            <article id="event-details">
                {content}
            </article>
        </>
    );
}
