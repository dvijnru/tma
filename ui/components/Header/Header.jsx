import React from 'react';

import styles from './Header.module.css';

import { classNames } from "@telegram-mini-apps/js";

import { usePlatform } from "../../hooks/usePlatform.js";

export const Header = ({
        children,
        type = 'default',
        ...props
   }) => {

    const platform = usePlatform();

    return (
        <>
            <div className={classNames(
                styles['tgHeader'],
                styles[`Header--${type}`],
                platform === 'ios' && styles['Header--ios'],
            )} {...props}>
                {children}
            </div>
        </>
    );
};
