import {useCallback, useEffect, useRef, useState} from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import {fetchUserPlaces, updateUserPlace} from "./http.js";
import ErrorInfo from './components/ErrorInfo.jsx';


function App() {
    const selectedPlace = useRef();
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()
    const [userPlaces, setUserPlaces] = useState([]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState()
    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);
            try {
                const places = await fetchUserPlaces();
                setUserPlaces(places);
            } catch (error) {
                setError(
                    {
                        message: error.message || 'Could not fetch user places.'
                    }
                );
            }
            setIsFetching(false);
        }
        fetchPlaces();
    }, []);
    function handleStartRemovePlace(place) {
        setModalIsOpen(true);
        selectedPlace.current = place;
    }

    function handleStopRemovePlace() {
        setModalIsOpen(false);
    }

    async function handleSelectPlace(selectedPlace) {
        setUserPlaces((prevPickedPlaces) => {
            if (!prevPickedPlaces) {
                prevPickedPlaces = [];
            }
            if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
                return prevPickedPlaces;
            }
            return [selectedPlace, ...prevPickedPlaces];
        });
        try {
            await updateUserPlace([...userPlaces, selectedPlace]);
        } catch (error) {
            setUserPlaces(userPlaces)
            setErrorUpdatingPlaces(
                {
                    message: error.message || 'Something went wrong while updating user places.'
                }
            );
        }

    }

    const handleRemovePlace = useCallback(async function handleRemovePlace() {
        setUserPlaces((prevPickedPlaces) =>
            prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
        );
        try {
            await updateUserPlace(userPlaces.filter((place) => place.id !== selectedPlace.current.id))
        } catch (error) {
            setUserPlaces(userPlaces)
            setErrorUpdatingPlaces(
                {
                    message: error.message || 'Failed to remove place.'
                }
            );
        }
        setModalIsOpen(false);
    }, [userPlaces]);

    function handleError(error) {
        setErrorUpdatingPlaces(null);
    }

    return (
        <>
            <Modal open={errorUpdatingPlaces}>
                {errorUpdatingPlaces && <ErrorInfo title={'ErrorInfo updating places'}
                                                   message={errorUpdatingPlaces.message}
                                                   onConfirm={handleError}
                ></ErrorInfo>
                }
            </Modal>
            <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
                <DeleteConfirmation
                    onCancel={handleStopRemovePlace}
                    onConfirm={handleRemovePlace}
                />
            </Modal>

            <header>
                <img src={logoImg} alt="Stylized globe"/>
                <h1>PlacePicker</h1>
                <p>
                    Create your personal collection of places you would like to visit or
                    you have visited.
                </p>
            </header>
            <main>
                {error && <ErrorInfo title="ErrorInfo fetching places" message={error.message}></ErrorInfo>}
                {!error && (<Places
                    title="I'd like to visit ..."
                    fallbackText="Select the places you would like to visit below."
                    isLoading={isFetching}
                    loadingText="Fetching your places..."
                    places={userPlaces}
                    onSelectPlace={handleStartRemovePlace}
                />)
                }

                <AvailablePlaces onSelectPlace={handleSelectPlace}/>
            </main>
        </>
    );
}

export default App;
