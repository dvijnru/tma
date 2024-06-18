import React from 'react';

import styles from './Placeholder.module.css';

import { classNames } from "@telegram-mini-apps/js";

export const Placeholder = ({
        stretched = false,
        icon = null,
        header = null,
        action =null,
        children,
        ...restProps
   }) => {

    return (
        <div className={classNames(
            styles['tgPlaceholder'],
            stretched && styles['tgPlaceholder--stretched'],
            styles['Placeholder--withPadding']
        )} {...restProps}>
            {icon && <div className={styles['Placeholder__icon']}>{icon}</div>}
            {header && <div className={styles['Placeholder__header']}>{header}</div>}
            <div className={styles['Placeholder__text']}>
                {children}
            </div>
            {action && <div className={styles['Placeholder__action']}>{action}</div>}
        </div>
    );
};
