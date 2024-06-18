import React from 'react';

import styles from './InputGroup.module.css';

import { classNames } from "@telegram-mini-apps/js";

export const InputGroup = ({
        children
   }) => {

    return (
        <div className={classNames(
            styles['tgInputGroup'],
            'InputGroup'
        )}>
            {children}
        </div>
    );
};
