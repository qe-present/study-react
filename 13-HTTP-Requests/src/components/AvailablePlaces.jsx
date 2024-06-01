import Places from './Places.jsx';
import Error from './Error.jsx';
import {useEffect, useState} from 'react';

const places = localStorage.getItem('places')
export default function AvailablePlaces({onSelectPlace}) {
    const [isFetching, setIsFetching] = useState(false)
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState()
    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);
            try {
                const response = await fetch('http://localhost:3000/places');
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.message || 'Could not fetch places.');
                }
                setAvailablePlaces(data.places);
            } catch (error) {
                setError(
                    {
                        message: error.message || 'Something went wrong while fetching places.'
                    }
                );
            }
            setIsFetching(false);
        }

        fetchPlaces()
    }, []);

    if (error) {
        return <Error title={"An error occurred"}
                      message={error.message}
        ></Error>
    }
    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            isLoading={isFetching}
            loadingText="fetching places data..."
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
}
