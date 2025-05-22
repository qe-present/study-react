import Head from "next/head";
import MeetupList from "@/components/meetups/MeetupList";
import {MongoClient} from 'mongodb'
import {Fragment} from "react";


export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb://localhost:27017/first')
    const db = client.db()
    const meetupsCollection = db.collection('meetup')
    const meetups = await meetupsCollection.find({}).toArray()
    client.close()
    return {
        props: {
            meetups: meetups.map(meetup => ({
                id: meetup._id.toString(),
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                description: meetup.description
            }))
        },
        revalidate: 10,
    }
}

//getServerSideProps：每次请求时运行（动态服务器渲染）
//
// getStaticProps + revalidate：构建时生成，之后定期重新验证（增量静态再生）
export default function HomePage(props) {
    return (
        <>
            <Fragment>
                <Head>
                    <title>Meetup App</title>
                    <meta name="description" content="Browse a huge list of highly active React meetups!" />
                </Head>
                <MeetupList meetups={props.meetups}/>
            </Fragment>
        </>
    )
}