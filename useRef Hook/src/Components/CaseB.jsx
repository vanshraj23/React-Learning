import { useRef } from 'react';
import styles from './CaseB.module.css';

function CaseB() {
    const boxRef = useRef();

    function changeColor() {
        const colors = ["red","yellow","blue","orange","green","pink","aqua","cyan"];
        const randomIndex = Math.floor(Math.random() * colors.length);

        boxRef.current.style.backgroundColor = colors[randomIndex];
    };

    return <>
        <div className={styles["container"]}>
            <div className={styles["box"]} ref={boxRef}></div>
            <button type='button' onClick={changeColor}>
                Change color
            </button>
        </div>        
    </>;
}

export default CaseB;