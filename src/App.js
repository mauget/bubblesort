import React from 'react';
import './App.css';
import bubbleSort from "./bubbleSort";
import createInputs from "./createInputs";

function App() {
    const a = createInputs();

    return (
        <div className="App">
            <header className="App-header">
                <h1>Bubble Sort</h1>
                <h3>Input array</h3>
                    {a.toString()}
                <h3>Sorted array</h3>
                    {bubbleSort(a).toString()}
            </header>
        </div>
    );
}

export default App;
