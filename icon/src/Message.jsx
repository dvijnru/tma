import React from 'react';
import {Icon} from "../Icon.jsx";

export const IconMessage = ({...props}) => {
    return (
        <Icon {...props}>
            <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M15 5.38c5.523 0 10 4.07 10 9.09 0 5.022-4.477 9.092-10 9.092-.847 0-1.669-.096-2.454-.276-.149-.034-.317.122-.599.382-.34.314-.846.781-1.68 1.25-1.067.598-2.545.546-2.795.44-.24-.1-.055-.3.27-.652.225-.243.517-.56.782-.966.649-.995.38-2.18.09-2.392C6.338 19.682 5 17.334 5 14.47c0-5.02 4.477-9.09 10-9.09zM10 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                      fill="currentColor"></path>
            </svg>
        </Icon>
    );
}
