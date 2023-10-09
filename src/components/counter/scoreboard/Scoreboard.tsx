import React, {FC} from 'react';
import s from './Scoreboard.module.css'

type PropsType = {
    counter: number
    maxCount: number
}

export const Scoreboard:FC<PropsType> = (props) => {
    return (
        <div className={`${s.tablo} ${props.counter === props.maxCount && s.finish}`}>
            {props.counter}
        </div>
    );
};

