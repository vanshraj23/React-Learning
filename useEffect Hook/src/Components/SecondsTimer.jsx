import styles from './SecondsTimer.module.css';
import { useEffect, useState } from 'react';

function SecondsTimer() {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(preValue => preValue + 1);
        },1000);

        return () => {
            clearInterval(intervalId);
        };
    },[]);

    return <>
        <div className={styles["timer--container"]}>
            <p>Seconds : {count < 10 ? `0${count}` : count}</p>
        </div>        
    </>;
}

export default SecondsTimer;