import React, {FC, ReactNode} from 'react';
import s from './ScoreboardSetting.module.css'

type PropsType = {
    children: ReactNode
}
export const ScoreboardSetting:FC<PropsType> = (props) => {
    return (
        <div className={s.tablo}>
            {props.children}
        </div>
    );
};