import {useTheme} from "../../context";

const VcsIcon = () => {
    const [ThemeMode] = useTheme();
    return (
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {
                ThemeMode === 'dark' ?
                    <>
                        <circle cx="4.5" cy="4" r="2" stroke="#CED0D6"/>
                        <path d="M4.5 11.5H8.5C9.60457 11.5 10.5 10.6046 10.5 9.5V9.5V8" stroke="#CED0D6"/>
                        <path d="M4.5 6.5L4.5 14.5" stroke="#CED0D6" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="10.5" cy="6" r="2" stroke="#CED0D6"/>
                    </>

                    :
                    <>
                        <circle cx="4.5" cy="4" r="2" stroke="#A8ADBD"/>
                        <path d="M4.5 11.5H8.5C9.60457 11.5 10.5 10.6046 10.5 9.5V9.5V8" stroke="#A8ADBD"/>
                        <path d="M4.5 6.5L4.5 14.5" stroke="#A8ADBD" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="10.5" cy="6" r="2" stroke="#A8ADBD"/>
                    </>

            }
        </svg>

    )
}

export default VcsIcon;