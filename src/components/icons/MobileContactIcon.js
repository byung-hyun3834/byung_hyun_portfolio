import {useTheme} from "../../context";
import React from "react";

const MobileContactIcon = ({className}) => {
    const [ThemeMode] = useTheme();
    return(
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {ThemeMode === 'dark' ?
                <>
                    <path d="M4 4H6V5H4V4Z" fill="#CED0D6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 3V6C2 6.55228 2.44772 7 3 7H13C13.5523 7 14 6.55228 14 6V3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44772 2 3ZM3 6V3H13L13 6H3Z" fill="#CED0D6"/>
                    <path d="M6 11H4V12H6V11Z" fill="#CED0D6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 10V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V10C14 9.44772 13.5523 9 13 9H3C2.44772 9 2 9.44771 2 10ZM3 13V10H13L13 13H3Z" fill="#CED0D6"/>
                </>
                :
                <>
                    <path d="M4 4H6V5H4V4Z" fill="#6C707E"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 3V6C2 6.55228 2.44772 7 3 7H13C13.5523 7 14 6.55228 14 6V3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44772 2 3ZM3 6V3H13L13 6H3Z" fill="#6C707E"/>
                    <path d="M6 11H4V12H6V11Z" fill="#6C707E"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 10V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V10C14 9.44772 13.5523 9 13 9H3C2.44772 9 2 9.44771 2 10ZM3 13V10H13L13 13H3Z" fill="#6C707E"/>
                </>

            }
        </svg>

    )
}

export  default MobileContactIcon;