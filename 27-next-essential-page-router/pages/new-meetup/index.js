import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import {useRouter} from "next/router";
import {Fragment} from "react";
import Head from "next/head";

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
        <Fragment>
            <Head>
                <title>Add New Meetup</title>
                <meta name="description" content="Add your own meetups and create amazing networking opportunities!" />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
    )
}