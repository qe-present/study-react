import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Results'
import {useState} from "react";


function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })
    const inputIsValid = userInput.duration >= 1;

    function handleInputChange(inputIdentity, newInput) {
        const newUserInput = {...userInput, [inputIdentity]: +newInput}

        setUserInput(newUserInput)
    }

    return (
        <>
            <Header></Header>
            <UserInput onChange={handleInputChange} userInput={userInput}></UserInput>
            {inputIsValid && <Result input={userInput} ></Result>}
            {!inputIsValid && <p className="center">Please enter a valid duration (1 or greater).</p>}
        </>
    )
}

export default App
