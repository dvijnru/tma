import React, {useEffect, useState} from 'react';

import styles from './Switch.module.css';

import { usePlatform } from "../../hooks/usePlatform.js";

export const Switch = ({
           propsChecked = false,
           disabled = false,
           ...restProps
    }) => {

    const [checked, setChecked] = useState(propsChecked)

    function handleChange(event) {
        event.preventDefault();
        event.stopPropagation();
        setChecked(propsChecked);
        if (restProps.onChange) {
            restProps.onChange(event);
        }
    }

    // useEffect(() => {
    //     setChecked()
    // }, []);

    const platform = usePlatform();

    return (
        <label className={platform === 'ios' ? styles['tgCheckbox--ios'] : styles['tgCheckbox']} onClick={(event) => event.stopPropagation()}>
            <input
                type="checkbox"
                value="1"
                checked={checked}

                onChange={handleChange}
                disabled={disabled}
                {...restProps}
            />
            <span className={platform === 'ios' ? styles['Checkbox--ios--switch'] : styles['Checkbox--switch']}></span>
        </label>
        // <label>
        //     <input
        //         type="checkbox"
        //         checked={checked}
        //         onClick={(event) => event.stopPropagation()}
        //         onChange={handleChange}
        //         {...restProps}
        //     />
        //     test
        // </label>
    );
};
