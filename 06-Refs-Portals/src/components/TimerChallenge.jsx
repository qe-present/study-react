import {useState,useRef} from "react";

export default function TimerChallenge({title,targetTime}) {
    let timer = useRef();
    const [timeStarted, setTimeStarted] = useState(false)

    const [timerExpired, setTimerExpired] = useState(false)


    const handleStart = () => {
         timer.current = setTimeout(() => {
            handleStop();
        }, targetTime * 1000);
        setTimeStarted(true);
    }
    const handleStop = () => {
        clearTimeout(timer.current);
        setTimeStarted(false);
        setTimerExpired(false);
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p className="challenge-expired">you lose!</p>}
            <p className="challenge-time">
                {targetTime} seconds{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                < button onClick={timeStarted? handleStop : handleStart}>
                    {timeStarted? 'Stop' : 'start'} Challenge
                </button>
            </p>
            <p className={timeStarted ? 'active' : undefined}>
                {timeStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}
