import {useState} from "react";
export function useInput(defaultValue,validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue)
    const [didEdit, setDidEdit] = useState(false)
    const valueIsVaild=validationFn(enteredValue);
    function handleInputChange(event) {
        setEnteredValue(event.target.value)
        setDidEdit(false)
    }
    function handleBlur() {
        setDidEdit(true)
    }
    return {
        value: enteredValue,
        setEnteredValue,
        handleInputChange,
        handleBlur,
        hasError: didEdit&&!valueIsVaild
    }
}