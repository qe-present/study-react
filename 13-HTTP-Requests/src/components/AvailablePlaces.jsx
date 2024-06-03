import Places from './Places.jsx';
import ErrorInfo from './ErrorInfo.jsx';
import {useEffect, useState} from 'react';
import {sortPlacesByDistance} from "../loc.js";
import {fetchAvailablePlaces} from "../http.js";

const places = localStorage.getItem('places')
export default function AvailablePlaces({onSelectPlace}) {
    const [isFetching, setIsFetching] = useState(false)
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState()
    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);
            try {
                const places = await fetchAvailablePlaces();
                navigator.geolocation.getCurrentPosition( (position) => {
                    const sortedPlaces = sortPlacesByDistance(
                        places,
                        position.coords.latitude,
                        position.coords.longitude);
                    setAvailablePlaces(sortedPlaces);
                    setIsFetching(false);
                });

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
        return <ErrorInfo title={"An error occurred"}
                          message={error.message}
        ></ErrorInfo>
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
