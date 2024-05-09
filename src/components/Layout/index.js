import {Routes, Route, useLocation, Link} from 'react-router-dom';
import Styles, {StyeldLinkTab, StyeldLinkRoot, StyeldLinkCircles} from './styles'
import Pages from "pages";
import React from "react";

const Layout = () => {
    const loacation = useLocation();
    const this_pathName = loacation.pathname;
    console.log(this_pathName)
    return (
        <>
            <Styles.Header>
                <div style={{display: 'flex'}}>
                    <div className="linkCircles_wrap">
                        <Styles.StyeldLinkCircles to='/' className="close"></Styles.StyeldLinkCircles>
                        <Styles.StyeldLinkCircles to='/' className="hide"></Styles.StyeldLinkCircles>
                        <Styles.StyeldLinkCircles to='/' className="full_screen"></Styles.StyeldLinkCircles>
                    </div>
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
            <div style={{display: 'flex', height: 'calc(100vh - 101px)'}}>
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
                            <StyeldLinkRoot to='/Portfolio' className={this_pathName == "/Portfolio" && "active"}>
                                <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                                home.js
                            </StyeldLinkRoot>
                            <StyeldLinkRoot to='/Portfolio/Project' className={this_pathName == "/Portfolio/Project" && "active"}>
                                <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                                project.js
                            </StyeldLinkRoot>
                            <StyeldLinkRoot to='/Portfolio/Contact' className={this_pathName == "/Portfolio/Contact" && "active"}>
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
                        <StyeldLinkTab to='/Portfolio/Project' className={this_pathName == "/Portfolio/Project" && "active"}>
                            <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                            project.js
                        </StyeldLinkTab>
                        <StyeldLinkTab to='/Portfolio/Contact' className={this_pathName == "/Portfolio/Contact" && "active"}>
                            <img className="module_icon" src={'/img/icons/js_icon.png'}/>
                            Contact.js
                        </StyeldLinkTab>

                    </div>
                    <div className="container">
                        <div className="container_wrap">
                            <Routes>
                                <Route path="/" element={<Pages.HomePage />} />
                                <Route path="/Project" element={<Pages.ProjectPage />} />
                                <Route path="/Contact" element={<Pages.ContactPage />} />
                            </Routes>
                        </div>
                    </div>

                </Styles.Contents>
            </div>
            <div style={{background:'#2A2C2F', borderTop: '1px solid #1E1F22', height: '60px'}}></div>
        </>
    )
}

export default Layout;