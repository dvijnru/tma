import React from 'react';

import styles from './Ol.module.css'

export const Ol = ({
        data
    }) => {

    return (
        <ol className={styles['tgOl']}>
            {data.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ol>
    );
};
