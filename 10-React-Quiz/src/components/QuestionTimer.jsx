import { useState,useEffect } from 'react'
export default function QuestionTimer({timeout,OnTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timeout)
    useEffect(() => {
        console.log('setting timeout')
        const timeoutId = setTimeout(OnTimeout,timeout)
        return () => {
            console.log('clearing timeout')
            clearTimeout(timeoutId)
        }
    }, [timeout,OnTimeout]);

    useEffect(() => {
        console.log('starting interval')
        const intervalId = setInterval(() => {
            setRemainingTime(prevState => prevState - 100)
        }, 100)
        return () => {
            console.log('clearing interval')
            clearInterval(intervalId)
        }
    }, []);

    return (
        <progress id="question-time" value={remainingTime} max={timeout}> </progress>
    )
}
