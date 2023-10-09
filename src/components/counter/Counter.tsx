import React, {FC, useEffect, useState} from 'react';
import {Scoreboard} from "./scoreboard/Scoreboard";
import {SectionBtn} from "./sectionBtn/SectionBtn";
import s from './Counter.module.css'

type CounterPropsType = {
    counter: number
    minCount: number
    maxCount: number
    increaseCounter: () => void
    resetCounter: () => void
}

export const Counter: FC<CounterPropsType> = ({counter, minCount, maxCount, increaseCounter, resetCounter}) => {

    return (
        <div className={s.wrapper}>
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

