import React from 'react';

import styles from './Ol.module.css'

export const OlLoad = () => {

    const nots = [1,2,3,4,5,6,7,8,9,10];

    return (
        <ol className={styles['tgOl']}>
            {nots.map((i) => {
                return <li key={i}><div className="skeleton skeleton-text" /></li>
            })}
        </ol>
    );
};
