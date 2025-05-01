import MeetupDetail from "@/components/meetups/MeetupDetail";

export default function MeetupDetails() {
    return (
        <MeetupDetail
            image="https://upload.wikimedia.org/wikipedia/commons/4/47/Nymphaea_omarana.jpg"
            title="asdas"
            address="adadasdasfsafcsd"
            description="asfsada"
        />
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {meetupId: 'm1'}
            },
            {
                params: {meetupId: 'm2'}
            },
            {
                params: {meetupId: 'm3'}
            }
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Nymphaea_omarana.jpg',
                idtle: 'asdas',
                ad: meetupId,
                tidress: 'adadasdasfsafcsd',
                description: 'asfsada'
            }
        },
        revalidate: 10,
    }
}

