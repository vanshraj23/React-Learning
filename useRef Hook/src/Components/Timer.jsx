import { useRef, useState } from 'react';
import styles from './Timer.module.css';

function Timer() {
    const  [ time, setTime ] = useState(0);
    const timeRef = useRef(null);

    function startTimer() {
        timeRef.current = setInterval(() => {
            setTime(prev => prev + 1);
        },1000);
    };

    function stopTimer() {
        clearInterval(timeRef.current);
    };

    function resetTimer() {
        stopTimer();
        timeRef.current = null;
        setTime(0);
    };

    return <>
        <div className={styles["container"]}>
            <div className={styles["timer--display"]}>
                Timer : {time} seconds
            </div>
            <div className={styles["btn--container"]}>
                <button type="button" onClick={startTimer}>Start</button>
                <button type="button" onClick={stopTimer}>Stop</button>
                <button type="button" onClick={resetTimer}>Reset</button>
            </div>
        </div>  
    </>;
}

export default Timer;