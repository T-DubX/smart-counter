import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {CounterSetting} from "./components/counterSetting/CounterSetting";

function App() {
    // const minCount: number = 0;
    // const maxCount: number = 5
    const [minCount, setMinCount] = useState(0)
    const [maxCount, setMaxCount] = useState(5)
    const [counter, setCounter] = useState<number>(minCount);
    const [btnDisable, setBtnDisable] = useState(false)

    useEffect(() => {
        const valueAsString = localStorage.getItem('counterValue')
        const minCountAsString = localStorage.getItem('min')
        const maxCountAsString = localStorage.getItem('max')

        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }

        if (minCountAsString) {
            let newValue = JSON.parse(minCountAsString)
            setMinCount(newValue)
        }

        if (maxCountAsString) {
            let newValue = JSON.parse(maxCountAsString)
            setMaxCount(newValue)
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

    const changeInputValue = (inpValue: string, inpName: string) => {
        let inpValueAsNumber = +inpValue;

        if(inpName === 'min') {
            setMinCount(inpValueAsNumber)
        } else {
            setMaxCount(inpValueAsNumber)
        }
       setBtnDisable(true)
    }

    const onSetLocalStorageValue = () => {
        setCounter(minCount)
        setBtnDisable(false)
        localStorage.setItem("min", JSON.stringify(minCount))
        localStorage.setItem("max", JSON.stringify(maxCount))
    }



    return (
        <div className="App">
            <Counter
                counter={counter}
                minCount={minCount}
                maxCount={maxCount}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                btnDisable={btnDisable}
            />
            <CounterSetting
                minCount={minCount}
                maxCount={maxCount}
                onChange={changeInputValue}
                onSetLocalStorageValue={onSetLocalStorageValue}
                btnDisable={btnDisable}
            />
        </div>
    );
}

export default App;
