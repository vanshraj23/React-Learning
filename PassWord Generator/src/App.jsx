import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
    const [ length, setLength ] = useState(8);
    const [ password, setPassword ] = useState('');
    const [ isNumsAllowed, setNumsAllowed ] = useState(false);
    const [ isCharAllowed, setCharAllowed ] = useState(false);

    const passwordField = useRef(null);

    const passwordGenerator = function () {
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
        if (isNumsAllowed) string += '0123456789';
        if (isCharAllowed) string += '!@#$%^&*_+=/~';
        
        let password = "";

        for (let i = 1; i <= length; ++i) {
            let randomIndex = Math.floor(Math.random() * string.length);
            password += string[randomIndex];
        }

        setPassword(password);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            passwordGenerator();
        }, 300);

        return () => clearTimeout(timeout);
    }, [length, isNumsAllowed, isCharAllowed]);


    return <>
        <div className='container'>
            <h1 className='title'>Password Generator</h1>
            <div className="wrapper">
                <input 
                    type="text" placeholder='generate password...' 
                    readOnly value={password} ref={passwordField}
                />
                <button 
                    type='button' className='copyBtn'
                    onClick={() => {
                        passwordField.current?.select();
                        passwordField.current?.setSelectionRange(0, password.length);
                        window.navigator.clipboard.writeText(passwordField.value);
                    }}
                >
                    copy
                </button>
            </div>
            <div className="wrapper">
                <input 
                    type="range" id='length' 
                    min={6} max={20} value={length} 
                    onChange={e => setLength(Number(e.target.value))}
                />
                <label htmlFor="length">Length(<span id='lengthCount'>{length}</span>)</label>
            </div>
            <div className="wrapper">
                <input type="checkbox" id="numbers" onChange={() => setNumsAllowed(preValue => !preValue)}/>
                <label htmlFor="numbers">Numbers</label>
                <input type="checkbox" id="characters" onChange={() => setCharAllowed(preValue => !preValue)}/>
                <label htmlFor="characters">Characters</label>
            </div>
        </div>
    </>;
}

export default App; 