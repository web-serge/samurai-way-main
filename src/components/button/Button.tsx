import s from './button.module.css'

import * as React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
};
export const Button = (props: ButtonPropsType) => {
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        props.onClick()
    }
    return (
        <button onClick={onClickHandler} className={s.button}>{props.name}</button>
    );
};