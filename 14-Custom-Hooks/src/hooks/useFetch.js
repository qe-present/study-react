import {useEffect, useState} from "react";
import {fetchUserPlaces} from "../http.js";

export function useFetch(fetchFn,initialData) {
    const [isFetching, setIsFetching] = useState()
    const [error, setError] = useState()
    const [fetchData, setFetchData] = useState(initialData)

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const places = await fetchFn();
                setFetchData(places);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' });
            }

            setIsFetching(false);
        }
        fetchData();
    }, [fetchFn]);

    return {
        isFetching,
        fetchData,
        setFetchData,
        error };
}
