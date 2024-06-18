import React from 'react';

import styles from './MenuHorizontal.module.css'

export const MenuHorizontal = ({
        children
    }) => {

    return (
        <div className={styles['tgMenuHorizontal']}>
            {children}
        </div>
    );
};
