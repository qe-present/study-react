import MeetupDetail from "@/components/meetups/MeetupDetail";
import {MongoClient,ObjectId} from 'mongodb' 

export default function MeetupDetails(props) {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    );
}

export async function getStaticPaths() {
    const client=await MongoClient.connect('mongodb://localhost:27017/first')
    const db=client.db()
    const meetupsCollection=db.collection('meetup')
    const meetups=await meetupsCollection.find({}, {_id:1}).toArray()

    client.close()
    return {
        paths: meetups.map(meetup=>({
            params:{meetupId:meetup._id.toString()}
        })),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId)
    const client=await MongoClient.connect('mongodb://localhost:27017/first')
    const db=client.db()
    const meetupsCollection=db.collection('meetup')
    const meetup=await meetupsCollection.findOne({
        _id: new ObjectId(meetupId)}
    )
    client.close()
    return {
        props: {
            meetupData:{
                id:meetup._id.toString(),
                title:meetup.title,
                image:meetup.image,
                address:meetup.address,
                description:meetup.description,
            }
        }
    }
}

