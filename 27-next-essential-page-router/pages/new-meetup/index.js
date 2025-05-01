import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import {useRouter} from "next/router";

export default function NewMeetup() {
    let router=useRouter()
    async function addMeetupHandler(meetupData) {
        const res = await fetch("/api/new-meetup", {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        router.push('/')
    }
    return (
        <>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </>
    )
}