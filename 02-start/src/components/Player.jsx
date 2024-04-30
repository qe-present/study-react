import {useState} from "react";

export default function Player({name, symbol, isActive, onNameChange}) {
    const [editMode, setEditMode] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    let buttonText = "Edit";

    function handleSave(event) {
        setPlayerName(event.target.value);
        if (editMode) {
            onNameChange(symbol, playerName);
        }
    }

    function handleEdit() {
        setEditMode((editMode) => !editMode);

    }

    let editName = <span className='player-name'>{playerName}</span>
    if (editMode) {
        editName = (
            <input type='text' value={playerName} onChange={handleSave}/>
        )
        buttonText = "Save";
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {editName}
                <span className='player-symbol'>
                            {symbol}
                </span>
            </span>
            <button onClick={handleEdit}>
                {buttonText}
            </button>
        </li>
    )
}
