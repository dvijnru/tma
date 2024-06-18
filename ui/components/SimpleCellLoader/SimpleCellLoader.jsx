import React from 'react';

import styles from './SimpleCellLoader.module.css';

import { classNames } from "@telegram-mini-apps/js";

import { Separator, usePlatform } from "../../index.js";

export const SimpleCellLoader = ({
                 before = null,
                 comment = null,
                 separator = null,
             }) => {

    const platform = usePlatform();

    return (
        <>
            <div className={classNames(
                styles['tgSimpleCellLoader'],
                (separator && platform === 'ios') ? styles['SimpleCellLoader--bottom-not'] : '',
                platform === 'ios' && styles['SimpleCellLoader--ios'])}>

                {before && (
                    <div className={styles['SimpleCellLoader__before']}>
                        {before === 'min' && <div className="skeleton skeleton-img-box-28"></div>}
                        {before === 'max' && <div className="skeleton skeleton-img-box-38"></div>}
                    </div>
                )}

                <div className={styles['SimpleCellLoader__content']}>
                    <div className="skeleton skeleton-text-min w-100"></div>
                    {comment && (
                        <div className={styles['SimpleCellLoader__content__comment']}>
                            <div className="skeleton skeleton-text-min"></div>
                        </div>)}
                </div>
            </div>
            {(separator && platform === 'ios') ?
                <Separator size={4}/> : ''}
        </>
    );
};
