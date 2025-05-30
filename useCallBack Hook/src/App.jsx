import './App.css';
import Child from "./Components/Child.jsx";
import { useState } from "react";
import { useCallback } from "react";

function App() {
    const [ count, setCount ] = useState(0);

    const handleClick = useCallback(() => setCount(prev => prev + 1),[]);

    return <div className='container'>
        <div>count : {count}</div>
        <button type="button" onClick={handleClick}>
            Incremenet
        </button>
        <Child buttonName="CLICK ME" handleClick={handleClick}/>
    </div>;
}

export default App;