import {Routes, Route, useLocation, Link} from 'react-router-dom';
import Styles, {StyeldLinkTab, StyeldLinkRoot} from './styles'
import Pages from "pages";
import React from "react";
import ContactPage from "../../pages/ContactPage";
const Layout = () => {
    const loacation = useLocation();
    const this_pathName = loacation.pathname;

    return (
        <>
            <Styles.Header>
                <div style={{display: 'flex'}}>
                    <img className="window_circles" src={'/img/icons/window_circles.png'} />
                    <div className="user">
                        <img className="initial" src={'/img/icons/user_ initial.png'} />
                        byung_hyun_portfolio
                    </div>
                    <div className="repo">
                        <img className="initial" src={'/img/icons/repo_icon.png'} />
                        main
                    </div>
                </div>
                <img className="settings" src={'/img/icons/settings_icon.png'} />
            </Styles.Header>
            <div style={{display: 'flex', height: 'calc(100vh - 104px)'}}>
                <Styles.Sidebar>
                    <div className="project_wrap">
                        <img className="initial" src={'/img/icons/project_icon.png'} />
                        <img className="repo" src={'/img/icons/repo_icon.png'} />
                    </div>
                    <Styles.SidebarRoot>
                        <div className='title'>Project</div>
                        <div className="root_wrap">
                            <div className="root">
                                <img className="arrow_down" src={'/img/icons/arrow_down_icon.png'}/>
                                <img className="module_icon" src={'/img/icons/module_icon.png'}/>
                                byung_hyun_portfolio
                            </div>
                            <div className="root" style={{paddingLeft:"22px"}}>
                                <img className="arrow_down" src={'/img/icons/arrow_down_icon.png'}/>
                                <img className="module_icon" src={'/img/icons/export_icon.png'}/>
                                src
                            </div>
                            <StyeldLinkRoot to='/Portfolio'>
                                <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                                home
                            </StyeldLinkRoot>
                            <StyeldLinkRoot to='/Portfolio/Project'>
                                <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                                project
                            </StyeldLinkRoot>
                            <StyeldLinkRoot to='/Portfolio/Contact'>
                                <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                                Contact
                            </StyeldLinkRoot>
                        </div>
                    </Styles.SidebarRoot>
                </Styles.Sidebar>
                <Styles.Contents>
                    <div className="tabs">
                        <StyeldLinkTab to='/Portfolio'>
                            <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                            home
                        </StyeldLinkTab>
                        <StyeldLinkTab to='/Portfolio/Project'>
                            <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                            project
                        </StyeldLinkTab>
                        <StyeldLinkTab to='/Portfolio/Contact'>
                            <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                            Contact
                        </StyeldLinkTab>
                    </div>
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Pages.HomePage />} />
                            <Route path="/Project" element={<Pages.ProjectPage />} />
                            <Route path="/Contact" element={<Pages.ContactPage />} />
                        </Routes>

                    </div>

                </Styles.Contents>
            </div>
            <div style={{background:'#2A2C2F', borderTop: '1px solid gray', height: '60px'}}></div>
        </>
    )
}

export default Layout;