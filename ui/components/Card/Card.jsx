import React from 'react';

import styles from './Card.module.css';

import { classNames } from "@telegram-mini-apps/js";

import { Header, Separator, usePlatform } from "../../index.js";

export const Card = ({
        children,
        header,
        mode = 'default',
        ...restProps
   }) => {

    const platform = usePlatform();

    return (
        <>
            <div className={classNames(
                styles['tgCard'],
                platform === 'ios' && styles['Card_radius--ios'],
                (platform === 'ios' && mode !== 'full') && styles['Card_margin--ios'],
                styles['tgCard--' + mode],
                )}
                 {...restProps}>
                {header && <Header>{header}</Header>}
                <div className={styles['Card__content']}>
                    {children}
                </div>
            </div>
            {platform !== 'ios' &&
                <Separator/>}
        </>
    );
};
