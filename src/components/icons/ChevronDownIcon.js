import React from "react";
import {useTheme} from "../../context";

const ChevronDownIcon = () => {
    const [ThemeMode] = useTheme();
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {
                ThemeMode === 'dark' ?
                    <path d="M11.5 6.25L8 9.75L4.5 6.25" stroke="#B4B8BF" strokeLinecap="round"/>
                    :
                    <path d="M11.5 6.25L8 9.75L4.5 6.25" stroke="#818594" strokeLinecap="round"/>

            }

        </svg>
    )
}

export default ChevronDownIcon;