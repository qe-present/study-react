import {useState} from "react";

export default function Player() {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false)
    function handleNameChange(event) {
        setSubmitted(false);
        setName(event.target.value);
    }
    function handleClearName() {
        setSubmitted(true);
    }

    return (
        <section id="player">
            <h2>Welcome { submitted? name : "unknown entity" }!</h2>
            <p>
                <input type="text" value={name} onChange={handleNameChange} />
                <button onClick={handleClearName}>Set Name</button>
            </p>
        </section>
    );
}
