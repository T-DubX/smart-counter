import React, {ChangeEvent, FC} from 'react';
import s from './Input.module.css'

type PropsType = {
    label: string
    value: number
    name:string
    onChange: (inpValue: string, inpName: string) => void
    error: boolean
}

export const Input: FC<PropsType> = ({label, value, name, error, onChange}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value, e.currentTarget.name)
    }
    return (
        <label className={s.label}>
            {label}
            <input className={`${s.field} ${error ? s.fieldError : ''}`} type="number" name={name} value={value} onChange={onChangeHandler}/>
        </label>
    );
};

