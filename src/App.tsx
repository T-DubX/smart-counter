import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/counter/Counter";

function App() {

    const minCount: number = 0;
    const maxCount: number = 5

    const [counter, setCounter] = useState<number>(minCount);

    useEffect(() => {
        const valueAsString = localStorage.getItem('counterValue')

        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])

    const increaseCounter = () => {
        counter < maxCount && setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(minCount)
    }

    return (
        <div className="App">
            <Counter
                counter={counter}
                minCount={minCount}
                maxCount={maxCount}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;
