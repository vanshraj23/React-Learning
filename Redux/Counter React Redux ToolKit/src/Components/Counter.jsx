//import styles from './Counter.module.css';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/counter.js';
import { privacyActions } from '../Store/privacy.js';

function Counter() {
    const { counterVal } = useSelector(store => store.counter);
    const privacy = useSelector(store => store.privacy); 
    const dispatch = useDispatch();

    const inputRef = useRef(null);
    
    const increment = () => dispatch(counterActions.increment());
    const decrement = () => dispatch(counterActions.decrement());

    const add = () => {
        dispatch(counterActions.addition({
            number: +(inputRef.current.value)
        }));
        inputRef.current.value = '';
    };
    
    const subs = () => {
        dispatch(counterActions.substraction({
            number: +(inputRef.current.value)
        }));
        inputRef.current.value = '';
    };

    const handlePrivacy = () => dispatch(privacyActions.toggle());

    return <>
       <h1>Counter</h1> 
       {privacy ? <p>Hidden...</p> : <p>Value : {counterVal}</p>}
       <button type="button" onClick={increment}>Increment</button>
       <button type="button" onClick={decrement}>Decrement</button>
       <input type="text" placeholder='Enter number...' ref={inputRef} id='5'/>
       <button type="button" onClick={add}>Add</button>
       <button type="button" onClick={subs}>Substract</button>
       <button type="button" onClick={handlePrivacy}>Privacy</button>
    </>;
}

export default Counter;