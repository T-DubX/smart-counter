import React, {FC} from 'react';

type PropsType = {
    onClick: () => void
    name: string
    disabled: boolean
}

export const Button:FC<PropsType> = (props) => {

    return (
        <button className={`btn ${props.disabled && 'disabled'}`} disabled={props.disabled} onClick={props.onClick}>{props.name}</button>
    );
};

