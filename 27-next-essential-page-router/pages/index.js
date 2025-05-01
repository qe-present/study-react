import MeetupList from "@/components/meetups/MeetupList";
import Layout from "@/components/layout/Layout";
import {useEffect, useState} from "react";

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
// export function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }
export async function getStaticProps(){
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
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
                <MeetupList meetups={props.meetups}/>
        </>
    )
}