import React, {FC, ReactNode} from 'react';
import {Button} from "../button/Button";
import s from './SectionBtn.module.css'


type PropsType = {
    // counter: number
    // maxCount: number
    // minCount: number
    // increaseCounter: ()=> void
    // resetCounter: () => void
    children: ReactNode
}

export const SectionBtn:FC<PropsType> = (props) => {




    return (
        <div className={s.wrapperBtn}>
            {props.children}
        </div>
    );
};

