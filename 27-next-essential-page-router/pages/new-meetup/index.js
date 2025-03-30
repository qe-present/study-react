import NewMeetupForm from "@/components/meetups/NewMeetupForm";
export default function NewMeetup(){
    function addMeetupHandler(meetupData){
        console.log(meetupData);
    }
    return (
        <>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}