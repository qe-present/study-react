export default async function EventLoader(){
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw new Response(JSON.stringify({
                message: 'Failed to load events'
            }),
            {
                status:500,
            }
        );
    } else {
        return response
    }
}
