import {Link, useNavigate} from 'react-router';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import {useMutation} from "@tanstack/react-query";
import {createEvent, queryClient} from "../../util/http.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
    const navigate = useNavigate();
    const {mutate, isPending, isError, error} = useMutation({
            mutationFn: createEvent,
            onSuccess:()=>{
                queryClient.invalidateQueries({
                    queryKey:['events'],
                    exact:true
                })
                navigate('/events');
            }
        }
    )

    function handleSubmit(formData) {
        mutate({
            event: formData
        })
    }

    return (
        <Modal onClose={() => navigate('../')}>
            <EventForm onSubmit={handleSubmit}>
                {isPending && 'Submitting...'}
                {!isPending && (<>
                    <Link to="../" className="button-text">
                        Cancel
                    </Link>
                    <button type="submit" className="button">
                        Create
                    </button>
                </>)}
            </EventForm>
            {isError && (
                <ErrorBlock message={error.info?.message} title="failed to create event"></ErrorBlock>
            )}

        </Modal>
    );
}
