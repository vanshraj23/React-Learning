import { useEffect, useRef, useState } from "react";
import styles from './CaseA.module.css';

function CaseA() {
    const [ count, setCount ] = useState(0);

    // it will persists its value.
    const variable = useRef(0);

    const handleClick = () => setCount(prev => prev + 1); 

    // Runs on every render.
    useEffect(() => {
        variable.current += 1;
        console.log(`Value : ${variable.current}`);
    });

    return <>
        <div className={styles["container"]}>
            <h1>Count : {count}</h1>
            <button type="button" onClick={handleClick}>
                Increment
            </button>
        </div>
    </>;
}

export default CaseA;