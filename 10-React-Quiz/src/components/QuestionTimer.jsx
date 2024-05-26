import { useState,useEffect } from 'react'
export default function QuestionTimer({timeout,OnTimeout,mode}) {
    const [remainingTime, setRemainingTime] = useState(timeout)
    useEffect(() => {
        const timeoutId = setTimeout(OnTimeout,timeout)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [timeout,OnTimeout]);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setRemainingTime(prevState => prevState - 100)
        }, 100)
        return () => {
            clearInterval(intervalId)
        }
    }, []);

    return (
        <progress id="question-time"
                  value={remainingTime}
                  max={timeout}
                  className={mode}> </progress>
    )
}

