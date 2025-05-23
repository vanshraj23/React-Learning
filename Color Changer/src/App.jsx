import { useState } from 'react';
import './App.css';

function App() {
    const [bgColor, setBgColor] = useState('#fff');

    function handleOnClick(e) {
        if (e.target.classList.contains('btn')) {
            setBgColor(e.target.textContent);
        }
    };

    return <>
        <div className="screen" style={{backgroundColor: bgColor}}>
            <div className="btn-container" onClick={e => handleOnClick(e)}>
                {["red", "yellow", "green", "blue", "orange", "purple"].map(color =>
                    <button
                        key={color} className='btn'
                        style={{ backgroundColor: color }}
                    >
                        {color}
                    </button>
                )}
            </div>
        </div>
    </>;
}

export default App;