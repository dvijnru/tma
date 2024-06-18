import React from 'react';

import styles from './CellButtonLoader.module.css';

import { classNames } from "@telegram-mini-apps/js";

import { Separator, usePlatform } from "../../index.js";

export const CellButtonLoader = ({
                 before = null,
                 comment = null,
                 separator = null,
             }) => {

    const platform = usePlatform();

    return (
        <>
            <div className={classNames(
                styles['tgCellButtonLoader'],
                (separator && platform === 'ios') ? styles['CellButtonLoader--bottom-not'] : '',
                platform === 'ios' && styles['CellButtonLoader--ios'])}>

                {before && (
                    <div className={styles['CellButtonLoader__before']}>
                        {before === 'min' && <div className="skeleton skeleton-img-box-28"></div>}
                        {before === 'max' && <div className="skeleton skeleton-img-box-38"></div>}
                    </div>
                )}

                <div className={styles['CellButtonLoader__content']}>
                    <div className="skeleton skeleton-text-min w-100"></div>
                    {comment && (
                        <div className={styles['CellButtonLoader__content__comment']}>
                            <div className="skeleton skeleton-text-min"></div>
                        </div>)}
                </div>
            </div>
            {(separator && platform === 'ios') ?
                <Separator size={4}/> : ''}
        </>
    );
};
