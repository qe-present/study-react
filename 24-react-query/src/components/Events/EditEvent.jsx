import {Link, redirect, useNavigate, useNavigation, useParams, useSubmit} from 'react-router';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useQuery} from "@tanstack/react-query";
import {fetchEvent, queryClient, updateEvent} from "../../util/http.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
    const navigate = useNavigate();
    const {state} = useNavigation()

    const submit = useSubmit()
    const {id} = useParams();
    const {data, isError, error} = useQuery({
        queryKey: ['event', id],
        queryFn: ({signal}) => {
            fetchEvent({id, signal})
        },
        staleTime:1000

    })

    function handleSubmit(formData) {
        submit(formData, {method: 'post',})
    }

    function handleClose() {
        navigate('../');
    }

    let content;
    if (isError) {
        content = (
            <>
                <ErrorBlock message={error.info?.message || "please try again"} title="failed to fetch event"/>

                <div className="form-actions">
                    <Link to="../" className="button">
                        OK
                    </Link>
                </div>
            </>)
    }
    if (data) {

        content = (
            <EventForm inputData={data} onSubmit={handleSubmit}>
                {state === 'submitting' ? <p>Sending data...</p> :
                    (<>
                        <Link to="../" className="button-text">
                            Cancel
                        </Link>
                        <button type="submit" className="button">
                            Update
                        </button>
                    </>)
                }
            </EventForm>
        )
    }

    return (
        <Modal onClose={handleClose}>
            {content}
        </Modal>
    );
}

export function loader({params}) {
    queryClient.fetchQuery({
        queryKey: ['event', params.id],
        queryFn: ({signal}) => fetchEvent(
            {
                id: params.id,
                signal
            })
    })
}

export async function action({request, params}) {
    const formData = await request.formData();
    const updateData = Object.fromEntries(formData);
    await updateEvent({
        id: params.id,
        event: updateData
    })
    await queryClient.invalidateQueries(['event', params.id])
    return redirect('../')
}