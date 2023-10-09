import React, {FC} from 'react';
import s from './Button.module.css'

type PropsType = {
    onClick: () => void
    name: string
    disabled: boolean
}

export const Button:FC<PropsType> = (props) => {

    return (
        <button className={`${s.btn} ${props.disabled && s.disabled}`} disabled={props.disabled} onClick={props.onClick}>{props.name}</button>
    );
};

