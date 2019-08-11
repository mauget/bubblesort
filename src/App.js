import React from 'react';
import './App.css';
import bubbleSort from "./BubbleSort";

function App() {
    const a = [3,5,8,1,398,5,-9,7,321,8,6];

    return (
        <div className="App">
            <header className="App-header">
                <h1>Bubble Sort</h1>
                <p>Input array: </p> {a.toString()}
                <p>Sorted array:</p> {bubbleSort(a).toString()}
            </header>
        </div>
    );
}

export default App;
