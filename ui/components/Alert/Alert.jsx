import React from 'react';

import styles from './Alert.module.css';

import { classNames } from "@telegram-mini-apps/js";

const stylesAppearance = {
    accent: styles['Alert--appearance-accent'],//синий
    positive: styles['Alert--appearance-positive'],//зеленый
    negative: styles['Alert--appearance-negative'],//красный
    neutral: styles['Alert--appearance-neutral'],//серый - неготов
};

export const Alert = ({
      appearance = 'accent',
      children,
      ...restProps
   }) => {

    return (
        <>
            <div className={classNames(
                styles['tgAlert'],
                stylesAppearance[appearance],
                )}
                 {...restProps}>
                <div className={styles['Alert__content']}>
                    {children}
                </div>
            </div>
        </>
    );
};
