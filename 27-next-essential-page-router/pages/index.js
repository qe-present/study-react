import MeetupList from "@/components/meetups/MeetupList";
import Layout from "@/components/layout/Layout";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address',
        description: 'this is the first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Nymphaea_omarana.jpg',
        address: 'sadas',
        description: 'this is the second meetup'
    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Flower_%2814922374828%29.jpg',
        address: 'sadas',
        description: 'this is the third meetup'
    }
]

export default function HomePage() {
    return (
        <>
                <MeetupList meetups={DUMMY_MEETUPS}/>
        </>
    )
}