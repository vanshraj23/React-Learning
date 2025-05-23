import './App.css';
import { useState } from "react";

function App() {
    const [ counter, setCounter ] = useState(0);

    const increment = () => setCounter(prev => prev + 1);
    const decrement = () => setCounter(prev => prev - 1);

    return <>
        <h1>Counter value : {counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>;
}

export default App;