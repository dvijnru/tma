import React, { useState, useEffect, useRef } from 'react';

import styles from './Select.module.css';

import { classNames } from "@telegram-mini-apps/js";

import { FormattedMessage } from "react-intl";
import { Label } from "../Label/Label.jsx";
import { IconCheck, IconChevronDown, IconChevronUp } from "@telegram-mini-apps/icon";


export const Select = ({
       label,
       options,
       onSelect,
       selected,
       multiple = null,
       ...restProps
     }) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelectOption = (option) => {
        if(multiple) {
            if(selected.find(item => item.value === option.value)) {
                onSelect(selected.filter(item => item.value !== option.value));
            } else {
                onSelect([...selected, option]);
            }
        } else {
            onSelect(option);
        }
        setIsOpen(false);
    };

    return (
        <div className={styles['tgSelect']}>
            {label &&
                <Label>{label}</Label>}
            <div className={classNames(
                isOpen && styles['active']
            )} ref={dropdownRef}>
                <div className={classNames(
                    styles['SelectToggle'],
                    isOpen && styles['active'],
                    multiple ? styles['SelectToggle--multiple'] : null
                )} onClick={() => setIsOpen(!isOpen)}>
                    <div className={classNames(
                        styles['SelectToggle-body'],
                        multiple ? styles['SelectToggle-body--multiple'] : null
                    )}>
                        {multiple ?
                            selected.map((item) => (
                                <div key={item.value} className={classNames(
                                                                styles['SelectItem-body'],
                                                                styles['SelectItem-body--multiple']
                                )}>
                                    {item.icon &&
                                        <div className={styles['SelectItem-img']}><img src={item.icon} width={16} height={16}/></div>
                                    }
                                    {item.name}
                                </div>
                            ))
                        :
                            selected ?
                            <>
                                {selected.icon ?
                                    <div className={styles['SelectItem-img']}><img src={selected.icon} width={16} height={16}/></div>
                                    : null
                                }
                                {selected.name}
                            </>
                            :
                            <FormattedMessage id='choose' />
                        }
                    </div>
                    <div className={styles['SelectToggle-right']}>
                        {isOpen ?
                            <IconChevronUp />
                            :
                            <IconChevronDown />
                        }
                    </div>
                </div>
                {isOpen && (
                    <div className={styles['SelectMenu']}>
                        {options.map((option) => (
                            <div key={option.value} className={styles['SelectItem']} onClick={() => handleSelectOption(option)}>
                                <div className={styles['SelectItem-body']}>
                                    {option.icon &&
                                        <div className={styles['SelectItem-img']}><img src={option.icon} width={16} height={16}/></div>
                                    }
                                    {option.name}
                                </div>
                                {
                                    multiple ?
                                        selected && selected.find((item) => item.value == option.value) ?
                                            <div className={styles['SelectItem-right']}>
                                                <IconCheck />
                                            </div>
                                        : null
                                    :
                                        selected && selected.value == option.value ?
                                            <div className={styles['SelectItem-right']}>
                                                <IconCheck />
                                            </div>
                                        : null
                                }
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
