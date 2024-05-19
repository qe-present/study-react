import {useEffect, useState} from "react";

export default function ProgressBar({timer}) {
    const [remaingTime, setRemaingTime] = useState(timer)
    useEffect(
        ()=>{
            const interval=setInterval(() => {
                setRemaingTime((prvTime)=> prvTime-10); // decrement every second
            }, 10);
            return () => {
                clearInterval(interval);
            };
        },[]
    )
    return (
        <progress value={remaingTime} max={timer}></progress>
    )
}
