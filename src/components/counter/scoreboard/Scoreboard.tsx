import React, {FC} from 'react';

type PropsType = {
    counter: number
    maxCount: number
}

export const Scoreboard:FC<PropsType> = (props) => {
    return (
        <div className={`tablo ${props.counter === props.maxCount && 'finish'}`}>
            {props.counter}
        </div>
    );
};

