import React from 'react';

import styles from './MenuHorizontalItem.module.css'

export const MenuHorizontalItem = ({
        children,
        ...props
    }) => {

    return (
        <div className={styles['tgMenuHorizontalItem']} {...props}>
            {children}
        </div>
    );
};
