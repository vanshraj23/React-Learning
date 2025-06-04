//import styles from './Counter.module.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const inputRef = useRef(null);
    
    const increment = () => dispatch({type: 'INCREMENT', payload: {number: 1}});
    const decrement = () => dispatch({type: 'DECREMENT', payload: {number: 1}});

    const add = () => {
        dispatch({type: 'ADDITION', payload: {number: +(inputRef.current.value)}});
        inputRef.current.value = '';
    };

    const subs = () => {
        dispatch({type: 'SUBSTRACTION', payload: {number: +(inputRef.current.value)}});
        inputRef.current.value = '';
    };

    return <>
       <h1>Counter</h1> 
       <p>Value : {counter}</p>
       <button type="button" onClick={increment}>Increment</button>
       <button type="button" onClick={decrement}>Decrement</button>
       <input type="text" placeholder='Enter number...' ref={inputRef}/>
       <button type="button" onClick={add}>Add</button>
       <button type="button" onClick={subs}>Substract</button>
    </>;
}

export default Counter;