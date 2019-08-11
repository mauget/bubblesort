import React from 'react';
import './App.css';
import bubbleSort from "./BubbleSort";

function App() {
    // const a = [3,5,8,1,398,5,-9,7,321,8,6];
    // const a = [9,8,7,6,5,4,3,2,1,0];
    const a = [0,1,2,3,4,5,6,7,8,9];

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
