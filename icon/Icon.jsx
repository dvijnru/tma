import React from 'react';

import styles from './index.module.css';

export const Icon = ({
              size = 16,
              color = null,
              bg = null,
              children,
              ...props
          }) => {

    const style = {
        width: size,
        height: size,
        ...props.style
    }

    if (color) {
        style.color = color;
    }

    let className = '';
    if (bg) {
        style.background = bg;
        className = styles['iconBg'];
    }

    delete props.style;

    return (
        <div className={className} style={style} {...props}>
            {children}
        </div>
    );
}
