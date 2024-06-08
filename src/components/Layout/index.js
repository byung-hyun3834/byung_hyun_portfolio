import {Routes, Route, useLocation, Link} from 'react-router-dom';
import Styles, {StyeldLinkTab, StyeldLinkRoot} from './styles'
import Pages from "pages";
import React, {useState} from "react";
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
import SettingModal from "../SettingModal";
import JsIcon from "../icons/JsIcon";


const Layout = () => {
    const loacation = useLocation();
    const this_pathName = loacation.pathname;

    const [modalVisible, setModalVisible] = useState(false)

    const openModal = () => {

        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <>
            <ThemeProvider>
                {
                    modalVisible && <SettingModal onClose={closeModal} />
                }
                {/*<AppLayout/>*/}
                <GlobalStyle/>
                <Styles.Header>
                    <div style={{display: 'flex'}}>
                        <div className="linkCircles_wrap">

                            <Styles.StyeldLinkCircles to='/' className="close" $modalVisible={modalVisible} ><img src={'/img/icons/close_icon.png'}/></Styles.StyeldLinkCircles>
                            <Styles.StyeldLinkCircles className="hide" $modalVisible={modalVisible} ></Styles.StyeldLinkCircles>
                            <Styles.StyeldLinkCircles className="full_screen" $modalVisible={modalVisible} ></Styles.StyeldLinkCircles>
                        </div>
                        <div className="user">
                            <img className="initial" src={'/img/icons/user_initial_blue.png'}/>
                            <span>byung_hyun_portfolio</span>
                        </div>
                        <a className="repo" href='https://github.com/Edward-Shawn' target='_blank'>
                            <VcsIcon/>
                            main
                        </a>
                    </div>

                    <SettingsIcon className="settings" onClick={openModal}  />
                </Styles.Header>
                <div style={{display: 'flex', height: 'calc(100vh - 80px)'}}>
                    <Styles.Sidebar>
                        <div className="project_wrap">
                            <div className="mobileIcon_wrap">
                                <Styles.StyeldLinkMobile to='/Portfolio'
                                                         className={this_pathName === "/Portfolio" ? "active" : ""}>
                                    <MobileHomeIcon/>
                                </Styles.StyeldLinkMobile>
                                <Styles.StyeldLinkMobile to='/Portfolio/Project'
                                                         className={this_pathName === "/Portfolio/Project" ? "active" : ""}>
                                    <MobileProjectIcon/>
                                </Styles.StyeldLinkMobile>
                                <Styles.StyeldLinkMobile to='/Portfolio/Contact'
                                                         className={this_pathName === "/Portfolio/Contact" ? "active" : ""}>
                                    <MobileContactIcon/>
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
                                    src
                                </div>
                                <StyeldLinkRoot to='/Portfolio' className={this_pathName == "/Portfolio" && "active"}>
                                    <JsIcon className="module_icon" />
                                    home.js
                                </StyeldLinkRoot>
                                <StyeldLinkRoot to='/Portfolio/Project'
                                                className={this_pathName == "/Portfolio/Project" && "active"}>
                                    <JsIcon className="module_icon" />
                                    project.js
                                </StyeldLinkRoot>
                                <StyeldLinkRoot to='/Portfolio/Contact'
                                                className={this_pathName == "/Portfolio/Contact" && "active"}>
                                    <JsIcon className="module_icon" />
                                    Contact.js
                                </StyeldLinkRoot>
                            </div>
                        </Styles.SidebarRoot>
                    </Styles.Sidebar>
                    <Styles.Contents>
                        <div className="tabs">
                            <StyeldLinkTab to='/Portfolio' className={this_pathName == "/Portfolio" && "active"}>
                                <JsIcon className="module_icon" />
                                home.js
                            </StyeldLinkTab>
                            <StyeldLinkTab to='/Portfolio/Project'
                                           className={this_pathName == "/Portfolio/Project" && "active"}>
                                <JsIcon className="module_icon" />
                                project.js
                            </StyeldLinkTab>
                            <StyeldLinkTab to='/Portfolio/Contact'
                                           className={this_pathName == "/Portfolio/Contact" && "active"}>
                                <JsIcon className="module_icon" />
                                Contact.js
                            </StyeldLinkTab>
                        </div>
                        <div className="container">

                                <Routes>
                                    <Route path="/" element={<Pages.HomePage/>}/>
                                    <Route path="/Project" element={<Pages.ProjectPage/>}/>
                                    <Route path="/Contact" element={<Pages.ContactPage/>}/>
                                </Routes>

                        </div>
                    </Styles.Contents>
                </div>
                <Styles.Footer></Styles.Footer>
            </ThemeProvider>
        </>
    )
}

export default Layout;