import React from 'react';

import styles from './InputLoader.module.css';

import { Label } from "../Label/Label.jsx";

export const InputLoader = ({
        label,
        type = 'text',
        ...restProps
   }) => {

    return (
        <div className={styles['tgInput']}>
            {label &&
                <Label>{label}</Label>}
            <div className={styles['tgInputLoader']}>
                <div className="skeleton skeleton-input"></div>
            </div>
        </div>
    );
};
