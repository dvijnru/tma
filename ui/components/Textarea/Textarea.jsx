import React from 'react';

import styles from './Textarea.module.css';

import { Label } from "../Label/Label.jsx";

export const Textarea = ({
        label,
        cols = 10,
        rows = 5,
        ...restProps
   }) => {

    return (
        <div className={styles['tgTextarea']}>
            {label &&
                <Label>{label}</Label>}
            <textarea className={styles['Textarea']} cols={cols} rows={rows}  {...restProps}></textarea>
        </div>
    );
};
