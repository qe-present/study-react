import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    let timer = useRef();
    const dialog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000
    if (timeRemaining <= 0) {
        clearInterval(timer.current);

        dialog.current.show()
    }
    const handleReset = () => {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000)
    }
    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10)
        }, 10);
    }
    const handleStop = () => {
        dialog.current.show()
        clearInterval(timer.current);
    }
    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                result="lose"
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} seconds{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    < button onClick={timeIsActive ? handleStop : handleStart}>
                        {timeIsActive ? 'Stop' : 'start'} Challenge
                    </button>
                </p>
                <p className={timeIsActive ? 'active' : undefined}>
                    {timeIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}
