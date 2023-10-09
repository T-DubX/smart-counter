import React, {FC} from 'react';
import s from '../counter/Counter.module.css'
import {SectionBtn} from "../sectionBtn/SectionBtn";
import {Button} from "../button/Button";
import {ScoreboardSetting} from "./scoreboardSetting/ScoreboardSetting";
import {Input} from "../input/Input";

type PropsType = {
    maxCount: number
    minCount: number
    onChange: (inpValue: string, inpName: string) => void
    onSetLocalStorageValue: ()=> void
    btnDisable: boolean
}

export const CounterSetting: FC<PropsType> = ({maxCount, minCount, onChange,onSetLocalStorageValue, btnDisable}) => {

    const isValidMax = maxCount <= 0 || maxCount <= minCount
    const isValidStart = minCount < 0 || minCount >= maxCount

    return (
        <div className={s.wrapper}>
            <ScoreboardSetting>
                <Input label={'max value'} name={'max'} value={maxCount} error={isValidMax} onChange={onChange}/>
                <Input label={'start value'} name={'min'} value={minCount} error={isValidStart} onChange={onChange}/>
            </ScoreboardSetting>
            <SectionBtn>
                <Button onClick={onSetLocalStorageValue} name={'set'} disabled={!btnDisable || isValidMax || isValidStart}/>
            </SectionBtn>
        </div>
    );
};
