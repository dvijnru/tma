import React from 'react';

import styles from './Separator.module.css';

import { classNames } from "@telegram-mini-apps/js";

import { usePlatform } from "../../hooks/usePlatform.js";

export const Separator = ({
              size = 8,
          ...restProps
      }) => {

    const platform = usePlatform();

    return (
        <div className={classNames(
            styles['tgSeparator'],
        )}
             {...restProps}>
            <hr className={classNames(
                styles['Separator__in'],
                styles[`Separator__in--${size}`],
                platform === 'ios' && styles['Separator__in--ios'],
            )} />
        </div>
    );
};
