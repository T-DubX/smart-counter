import React, {FC} from 'react';
import s from './Scoreboard.module.css'

type PropsType = {
    counter: number
    maxCount: number
    minCount: number
    btnDisable: boolean
}

export const ScoreboardCount: FC<PropsType> = ({counter, maxCount, minCount, btnDisable}) => {
    let message = 'Enter values and press "set"'

    const invalidValue = maxCount === minCount || minCount < 0 || maxCount < 0

    if(invalidValue) message = 'Incorrect value!'

    return (

        <div className={`${s.tablo} ${counter === maxCount && s.finish}`}>
            {
                btnDisable ? <span className={invalidValue ? s.errorMessage : s.message}>{message}</span> :
                    <span>{counter}</span>
            }
        </div>
    );
};

