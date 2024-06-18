import React from 'react';
import {Icon} from "../Icon.jsx";

export const IconRight = ({...props}) => {
    return (
        <Icon {...props}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
        </Icon>
    );
}
