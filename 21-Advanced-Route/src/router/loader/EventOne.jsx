export default async function EventOne({request, params}) {
    const response = await fetch(`http://localhost:8080/events/${params.id}`)
    if (!response.ok) {
        throw new Response(JSON.stringify({
            message: 'Could not fetch details for selected event.'
        }),
            {
                status: 500
            }
        )
    } else {
        return response
    }
}
