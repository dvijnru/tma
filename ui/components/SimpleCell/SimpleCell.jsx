import React from 'react';

import styles from './SimpleCell.module.css';

import { classNames } from "@telegram-mini-apps/js";

import { Separator, usePlatform } from "../../index.js";

export const SimpleCell = ({
        children,
        separator = null,
        type = 'default',
        after,
        comment,
        before,
        ...restProps
   }) => {

    const platform = usePlatform();

    return (
        <>
            <div className={classNames(
                styles['tgSimpleCell'],
                platform === 'ios' && styles['SimpleCell--ios'],
                styles[`SimpleCell--${type}`],
                (separator && platform === 'ios') ? styles['SimpleCell--bottom-not'] : ''
                )}
                 {...restProps}>

                {before && (
                <div className={styles['SimpleCell__before']}>{before}</div>)}
                <div className={styles['SimpleCell__content']}>
                    <div className={styles['SimpleCell__content__body']}>
                        {children}
                        {comment && (
                            <div className={styles['SimpleCell__content__comment']}>{comment}</div>)}
                    </div>
                    {(after) ? (
                        <div className={styles['SimpleCell__content__after']}>
                            {after}
                        </div>) : ''}
                </div>
            </div>
            {(separator && platform === 'ios') ?
                <Separator size={4}/> : ''}
        </>
    );
};
