import React from 'react';

import styles from './Button.module.css';

import { classNames } from "@telegram-mini-apps/js";

import { usePlatform } from "../../hooks/usePlatform.js";

const stylesSize = {
    s: styles['Button--size-s'],
    m: styles['Button--size-m'],
    l: styles['Button--size-l']
};

const stylesWidth = {
    normal: styles['Button-width-normal'],
    full: styles['Button--width-full']
}

const stylesAlign = {
    left: styles['Button--align-left'],
    center: styles['Button--align-center'],
    right: styles['Button--align-right'],
};

const stylesMode = {
    primary: styles['Button--mode-primary'],
    secondary: styles['Button--mode-secondary'],//инверсия цвета заднего фона и текста  - неготов
    tertiary: styles['Button--mode-tertiary'],//кнопка с цветом текста как в инверсии, но без фона, без фона, фон от инверсии при ховере  - неготов
    outline: styles['Button--mode-outline'],//цвет текста + бордер одним, без фона  - неготов
    link: styles['Button--mode-link'],
};

const stylesAppearance = {
    accent: styles['Button--appearance-accent'],//синий
    positive: styles['Button--appearance-positive'],//зеленый
    negative: styles['Button--appearance-negative'],//красный
    neutral: styles['Button--appearance-neutral'],//серый - неготов
    link: styles['Button--appearance-link'],//цвет текста
};

export const Button = ({
        size = 's',
        mode = 'primary',
        appearance = 'accent',
        align = 'center',
        width = 'normal',
        isGroup = false,
        disabled = false,
        children,

        ...restProps
   }) => {

    const platform = usePlatform();

    return (
        <button className={classNames(
            styles['tgButton'],
            stylesSize[size],
            stylesMode[mode],
            stylesAlign[align],
            stylesWidth[width],
            stylesAppearance[appearance],
            isGroup && platform !== 'ios' && styles['ButtonGroup--ios'],
        )}
            disabled={disabled}
             {...restProps}>
            {children}
        </button>
    );
};
