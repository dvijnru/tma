import React from 'react';
import {Icon} from "../Icon.jsx";

export const IconRefresh = ({...props}) => {
    return (
        <Icon {...props}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
        </Icon>
    );
}
