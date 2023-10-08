import React, {FC} from 'react';
import {Button} from "../../Button";


type PropsType = {
    counter: number
    maxCount: number
    minCount: number
    increaseCounter: ()=> void
    resetCounter: () => void
}

export const SectionBtn:FC<PropsType> = (props) => {


    const disabledResetBtn = props.counter === props.minCount
    const disabledIncBtn = props.counter === props.maxCount

    return (
        <div className='wrapper-btn'>
            <Button disabled={disabledIncBtn} onClick={props.increaseCounter} name={'inc'}/>
            <Button disabled={disabledResetBtn} onClick={props.resetCounter} name={'reset'}/>
        </div>
    );
};

