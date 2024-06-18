import React from 'react';

import styles from './Group.module.css';

import { classNames } from "@telegram-mini-apps/js";

import { Separator, usePlatform } from "../../index.js";

export const Group = ({
        children,
        ...restProps
   }) => {

    const platform = usePlatform();

    return (
        <>
            <div className={classNames(
                styles['tgGroup'],
                    platform === 'ios' && styles['Group--ios'],
                )}
                 {...restProps}>
                {children}
            </div>
            {platform !== 'ios' &&
                <Separator/>}
        </>
    );
};
