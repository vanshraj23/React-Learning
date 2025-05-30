import React from "react";
//import styles from './Child.module.css';

const Child = React.memo(({ buttonName, handleClick }) => {
    console.log("Child recreated");
    
    return <>
        <button onClick={handleClick}>
            {buttonName}
        </button>
    </>;
});

export default Child;