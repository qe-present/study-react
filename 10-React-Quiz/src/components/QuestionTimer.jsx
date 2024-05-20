import { useState,useEffect } from 'react'
export default function QuestionTimer({timeout,OnTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timeout)
    useEffect(() => {
        setTimeout(OnTimeout,timeout)
    }, [timeout,OnTimeout]);

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prevState => prevState - 100)
        }, 100)
    }, []);

    return (
        <progress id="question-time" value={remainingTime} max={timeout}> </progress>
    )
}
