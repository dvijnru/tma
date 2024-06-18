import React from 'react';

import styles from './CellButton.module.css';

import { classNames } from "@telegram-mini-apps/js";

import { IconRight } from "@telegram-mini-apps/icon";
import { Separator, usePlatform } from "../../index.js";

export const CellButton = ({
        centered = false,
        mode = 'primary',
        children,
        separator = null,
        hideIconRightIOS = false,
        after,
        comment,
        before,
        className = null,
        innerRef = null,
        ...restProps

   }) => {

    const platform = usePlatform();

    return (
        <>
            <div
                ref={innerRef}
                className={classNames(
                styles['tgCellButton'],
                platform === 'ios' && styles['CellButton--ios'],
                (separator && platform === 'ios') ? styles['CellButton--bottom-not'] : '',
                mode === 'danger' && styles['CellButton--mode-danger'],
                centered && styles['CellButton--centered'],
                className ? className : ''
                )}
                 {...restProps}>

                {before && (
                <div className={styles['CellButton__before']}>{before}</div>)}
                <div className={styles['CellButton__content']}>
                    <div className={styles['CellButton__content__body']}>
                        {children}
                        {comment && (
                            <div className={styles['CellButton__content__comment']}>{comment}</div>)}
                    </div>
                    {(after || (platform === 'ios' && !hideIconRightIOS)) ? (
                        <div className={styles['CellButton__content__after']}>
                            {after && after}
                            {(platform === 'ios' && !hideIconRightIOS) &&
                            <div className={styles['CellButton__content__after__ioc-icon-right']}>
                                <IconRight />
                            </div>}
                        </div>) : ''}
                </div>
            </div>
            {(separator && platform === 'ios') ?
                <Separator size={4}/> : ''}
        </>
    );
};
