import React, {FC, useState} from 'react';
import {Scoreboard} from "./scoreboard/Scoreboard";
import {SectionBtn} from "./sectionBtn/SectionBtn";
import './style.css'

export const Counter: FC = () => {

    const minCount: number = 0;
    const maxCount: number = 5

    const [counter, setCounter] = useState<number>(minCount);

    const increaseCounter = () => {
        counter < maxCount && setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(minCount)
    }

    return (
        <div className='wrapper-counter'>
            <Scoreboard counter={counter} maxCount={maxCount}/>
            <SectionBtn
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                maxCount={maxCount}
                minCount={minCount}
                counter={counter}
            />
        </div>
    );
};

