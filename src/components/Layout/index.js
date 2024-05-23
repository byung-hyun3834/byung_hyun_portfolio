import {Routes, Route, useLocation, Link} from 'react-router-dom';
import Styles, {StyeldLinkTab, StyeldLinkRoot} from './styles'
import Pages from "pages";
import React from "react";
import {ThemeProvider, useTheme} from "../../context";
import {GlobalStyle} from '../../theme/GlobalStyle'
import styled from "styled-components";
import SettingsIcon from "../icons/SettingsIcon";
import FolderIcon from "../icons/FolderIcon";
import VcsIcon from "../icons/VcsIcon";
import ModuleIcon from "../icons/Module";
import MobileHomeIcon from "../icons/MobileHomeIcon";
import MobileProjectIcon from "../icons/MobileProjectIcon";
import MobileContactIcon from "../icons/MobileContactIcon";


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
        <ToggleWrapper onClick={toggle} modes={mode}>
            {mode === 'dark' ? '🌚' : '🌝'}
        </ToggleWrapper>
    );
}

const ToggleWrapper = styled.button`
  position: fixed;
  z-index: 999999;
  bottom: 4%;
  right: 3%;
  background-color: ${props => props.theme.bgColor};
  border: ${props => props.theme.borderColor};
  color: ${props => props.modes === 'light' ? '#31302E' : '#bbb'};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border-radius: 30px;
  box-shadow: ${
          props => props.mode === 'dark' ? '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'
                  : '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'
  }
`;

const Layout = () => {
    const loacation = useLocation();
    const this_pathName = loacation.pathname;
    return (
        <>
            <ThemeProvider>
                <AppLayout/>
                <GlobalStyle/>
                <Styles.Header>
                    <div style={{display: 'flex'}}>
                        <div className="linkCircles_wrap">
                            <Styles.StyeldLinkCircles to='/' className="close"><img src={'/img/icons/close_icon.png'}/></Styles.StyeldLinkCircles>
                            <Styles.StyeldLinkCircles className="hide"></Styles.StyeldLinkCircles>
                            <Styles.StyeldLinkCircles className="full_screen"></Styles.StyeldLinkCircles>
                        </div>
                        <div className="user">
                            <img className="initial" src={'/img/icons/user_initial_blue.png'}/>
                            byung_hyun_portfolio
                        </div>
                        <a className="repo" href='https://github.com/Edward-Shawn' target='_blank'>
                            <VcsIcon/>
                            main
                        </a>
                    </div>
                    <SettingsIcon className="settings"/>
                </Styles.Header>
                <div style={{display: 'flex', height: 'calc(100vh - 80px)'}}>
                    <Styles.Sidebar>
                        <div className="project_wrap">
                            <div className="mobileIcon_wrap">
                                <Styles.StyeldLinkMobile to='/Portfolio' className={this_pathName === "/Portfolio" ? "active" : ""}>
                                    <MobileHomeIcon />
                                </Styles.StyeldLinkMobile>
                                <Styles.StyeldLinkMobile to='/Portfolio/Project' className={this_pathName === "/Portfolio/Project" ? "active" : ""}>
                                    <MobileProjectIcon />
                                </Styles.StyeldLinkMobile>
                                <Styles.StyeldLinkMobile to='/Portfolio/Contact' className={this_pathName === "/Portfolio/Contact" ? "active" : ""}>
                                    <MobileContactIcon />
                                </Styles.StyeldLinkMobile>
                            </div>
                            <a className="repo" href='https://github.com/Edward-Shawn' target='_blank'>
                                <VcsIcon className="repo"/>
                            </a>
                        </div>
                        <Styles.SidebarRoot>
                            <div className='title'>Project</div>
                            <div className="root_wrap">
                                <div className="root">
                                    <img className="arrow_down" src={'/img/icons/arrow_down_icon.png'}/>
                                    <ModuleIcon className="module_icon"/>
                                    byung_hyun_portfolio
                                </div>
                                <div className="root" style={{marginLeft: "25px"}}>
                                    <img className="arrow_down" src={'/img/icons/arrow_down_icon.png'}/>
                                    <FolderIcon className="initial"/>
                                    {/*<img className="module_icon" src={'/img/icons/export_icon.png'}/>*/}
                                    src
                                </div>
                                <StyeldLinkRoot to='/Portfolio' className={this_pathName == "/Portfolio" && "active"}>
                                    <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                                    home.js
                                </StyeldLinkRoot>
                                <StyeldLinkRoot to='/Portfolio/Project'
                                                className={this_pathName == "/Portfolio/Project" && "active"}>
                                    <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                                    project.js
                                </StyeldLinkRoot>
                                <StyeldLinkRoot to='/Portfolio/Contact'
                                                className={this_pathName == "/Portfolio/Contact" && "active"}>
                                    <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                                    Contact.js
                                </StyeldLinkRoot>
                            </div>
                        </Styles.SidebarRoot>
                    </Styles.Sidebar>
                    <Styles.Contents>
                        <div className="tabs">
                            <StyeldLinkTab to='/Portfolio' className={this_pathName == "/Portfolio" && "active"}>
                                <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                                home.js
                            </StyeldLinkTab>
                            <StyeldLinkTab to='/Portfolio/Project'
                                           className={this_pathName == "/Portfolio/Project" && "active"}>
                                <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                                project.js
                            </StyeldLinkTab>
                            <StyeldLinkTab to='/Portfolio/Contact'
                                           className={this_pathName == "/Portfolio/Contact" && "active"}>
                                <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                                Contact.js
                            </StyeldLinkTab>
                        </div>
                        <div className="container">
                            <div className="container_wrap">
                                <Routes>
                                    <Route path="/" element={<Pages.HomePage/>}/>
                                    <Route path="/Project" element={<Pages.ProjectPage/>}/>
                                    <Route path="/Contact" element={<Pages.ContactPage/>}/>
                                </Routes>
                            </div>
                        </div>
                    </Styles.Contents>
                </div>
                <Styles.Footer></Styles.Footer>
            </ThemeProvider>
        </>
    )
}

export default Layout;