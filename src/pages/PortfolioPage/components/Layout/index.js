import { Routes, Route, useLocation } from 'react-router-dom';
import Styles from './styles'
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
                    <div className="project_wrap" style={{width:'60px', borderRight:'1px solid red'}}>
                        <img className="initial" src={'/img/icons/project_icon.png'} />
                        <img className="repo" src={'/img/icons/repo_icon.png'} />
                    </div>
                    <Styles.SidebarRoot>
                        <div className='title' style={{ height:'60px', display: 'flex', alignItems: 'center', borderBottom: '1px solid red'}}>Project</div>
                        <div className="root">
                            <img src={'/img/icons/arrow_down_icon.png'}/>
                            <img src={'/img/icons/module_icon.png'}/>
                            byung_hyun_portfolio
                        </div>
                        <div>
                            asdf
                        </div>
                    </Styles.SidebarRoot>
                </Styles.Sidebar>
                <Styles.Contents>
                    <div style={{height: '60px',  borderBottom: '1px solid red'}}>tab nav</div>
                    <div className="container">
                        <div className="first_section">

                            <div>
                                <div>안녕하세요, 프론트엔드 개발자</div>
                                <div>손병현 입니다</div>
                                <button>contact ✉️</button>
                            </div>
                            <img className="profile" src={'/img/resource/profile.png'}/>
                        </div>
                    </div>
                </Styles.Contents>
            </div>
            <div style={{background:'#2A2C2F', border: '1px solid red', height: '60px'}}>footer</div>
        </>
    )
}

export default Layout;