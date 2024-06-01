import Styles, {ThemeToggleContainer} from './styles'
import {useTheme} from "../../context";
import React from "react";
import styled from "styled-components";
import ThemeDark from "../icons/ThemeDark";
import ThemeLight from "../icons/ThemeLight";


const AppLayout = ({children}) => {
    const [ThemeMode, toggleTheme] = useTheme();

    return (
        <>
            <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
                DarkMode
            </ThemeToggle>
        </>
    )
}

function ThemeToggle({toggle, mode}) {

    return (
        <Styles.ThemeToggleContainer onClick={toggle} $modes={mode}>
            <div className="item">
                <div className={`icon ${mode === 'dark' ? 'active' : ''}`}>
                    <ThemeDark/>
                </div>
                Dark
            </div>
            <div className="item">
                <div className={`icon ${mode === 'light' ? 'active' : ''}`}>
                    <ThemeLight/>
                </div>
                Light
            </div>
        </Styles.ThemeToggleContainer>
    );
}


const SettingModal = ({onClose}) => {
    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }

    return (
        <Styles.SettingModal>
            <div className="overlay" onClick={close}></div>
            <div className="modal_wrap">
                <div className="header">
                    <div className="linkCircles_wrap">
                        <div className="circles close" onClick={close}><img src={'/img/icons/close_icon.png'}/></div>
                        <div className="circles hide"></div>
                        <div className="circles full_screen"></div>
                    </div>
                    <div className="title">Settings</div>
                </div>
                <div className="rootInfo">Appearance & behavior > Appearance</div>

                <div className="setTheme">
                    <div className="title">
                       Theme :
                    </div>
                    <AppLayout/>
                </div>
            </div>
        </Styles.SettingModal>
    )
}

export default SettingModal;