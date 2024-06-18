import React from 'react';

import styles from './Banner.module.css';

import { classNames } from "@telegram-mini-apps/js";

import { usePlatform } from "../../hooks/usePlatform.js";
import { Separator } from "../Separator/Separator.jsx";

export const Banner = ({
           mode = 'tint',
           imageTheme = 'dark',
           before,
           header,
           subheader,
           text,
           children,
           background,
           actions,
           separator = null,
           ...restProps
       }) => {
    const platform = usePlatform();

    return (
        <>
            <div
                {...restProps}
                className={classNames(
                    styles['Banner'],
                    platform === 'ios' && styles['Banner--ios'],
                    mode === 'image' && styles['Banner--mode-image'],
                    // mode === 'image' && imageTheme === 'dark' && styles['Banner--inverted'],
                )}
            >
                <div className={styles['Banner__in']}>
                    {mode === 'image' && background && (
                        <div className={styles['Banner__bg']}>
                            {background}
                        </div>
                    )}

                    {before && <div className={styles['Banner__before']}>{before}</div>}

                    <div className={styles['Banner__content']}>
                        {header && (
                            <div className={styles['Banner__header']}>
                                {header}
                            </div>
                        )}
                        {subheader && (
                            <div className={styles['Banner__subheader']}>
                                {subheader}
                            </div>
                        )}
                        {text && (
                            <div className={styles['Banner__text']}>
                                {text}
                            </div>
                        )}
                        {actions && (
                            <div className={styles['Banner__actions']}>{actions}</div>
                        )}
                    </div>
                </div>
            </div>
            {separator && <Separator size={4}/>}
        </>
    );
};
