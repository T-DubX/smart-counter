import React, {FC} from 'react';
import {ScoreboardCount} from "./scoreboardCount/ScoreboardCount";
import {SectionBtn} from "../sectionBtn/SectionBtn";
import s from './Counter.module.css'
import {Button} from "../button/Button";

type CounterPropsType = {
    counter: number
    minCount: number
    maxCount: number
    btnDisable: boolean
    increaseCounter: () => void
    resetCounter: () => void
}

export const Counter: FC<CounterPropsType> = ({counter, minCount, maxCount, btnDisable, increaseCounter, resetCounter}) => {

    const disabledResetBtn = counter === minCount
    const disabledIncBtn = counter === maxCount

    return (
        <div className={s.wrapper}>
            <ScoreboardCount counter={counter} maxCount={maxCount} minCount={minCount} btnDisable={btnDisable}/>
            <SectionBtn>
                <Button disabled={disabledIncBtn} onClick={increaseCounter} name={'inc'}/>
                <Button disabled={disabledResetBtn} onClick={resetCounter} name={'reset'}/>
            </SectionBtn>
        </div>
    );
};

