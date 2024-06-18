import React from 'react';

import styles from './Spinner.module.css';

import { IconRefresh } from "@telegram-mini-apps/icon";

export const Spinner = () => {
    return (
        <>
            <div className={styles['tgSpinner']}>
                <div className={styles['Spinner__content']}>
                    <div className={styles['Spinner__icon']}>
                        <IconRefresh size={30}/>
                    </div>
                </div>
            </div>
        </>
    );
};
