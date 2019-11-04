import React, { useState } from 'react';
import './App.css';
import bubbleSort from "./bubbleSort";
import createInputs from "./createInputs";

function App() {
    const [inputs, setInputs] = useState(createInputs());

    const refresh = () => setInputs(createInputs());

    return (
        <div className="App">
            <header className="App-header">
                <h1>Bubble Sort</h1>
                <h3>Input array</h3>
                {inputs.toString()}
                <h3>Sorted array</h3>
                {bubbleSort(inputs).toString()}

                <p>
                    <button onClick={refresh}>New Input</button>
                </p>
            </header>
        </div>
    );
}

export default App;
