import React from 'react';

import styles from './Loader.module.css';

export const Loader = () => {

    return (
        <div className={styles['tgLoader']}>
            <div className={styles['Loader__content']}>
                <div className={styles['Loader__icon']}>
                    <img src="/icon/logo.svg" alt=""/>
                </div>
            </div>
        </div>
    );
};
