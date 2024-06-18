import React from 'react';

import styles from './Input.module.css';

import { Label } from "../Label/Label.jsx";

export const Input = ({
        label,
        type = 'text',
        ...restProps
   }) => {

    return (
        <div className={styles['tgInput']}>
            {label &&
                <Label>{label}</Label>}
            <input className={styles['Input']} type={type} {...restProps} />
        </div>
    );
};
