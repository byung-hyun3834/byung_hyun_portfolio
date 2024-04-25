import { Link } from 'react-router-dom';
import Styles, {Container, Sidebar} from './styles';
function PortfolioPage() {

    return (
        <>
            PortfolioPage
            <Link to='/'>
                Portfolio Page ! go to Main Page
            </Link>

            <Styles.Header>
                <img src={'/img/icons/window_circles.png'} />
                <img className="initial" src={'/img/icons/user_ initial.png'} />
                byung_hyun_portfolio
                <img className="initial" src={'/img/icons/repo_icon.png'} />
                main
                <img className="initial" src={'/img/icons/settings_icon.png'} />
            </Styles.Header>
            <div style={{display: 'flex', height: 'calc(100vh - 104px)'}}>
                <Styles.Sidebar>
                    <div style={{width:'60px', borderRight:'1px solid red'}}>
                        <img className="initial" src={'/img/icons/project_icon.png'} />
                        <img className="repo" src={'/img/icons/repo_icon.png'} />
                    </div>
                    <Styles.SidebarRoot>
                        <div className='title' style={{ height:'60px', display: 'flex', alignItems: 'center', borderBottom: '1px solid red'}}>Project</div>
                        <div>polder</div>
                    </Styles.SidebarRoot>
                </Styles.Sidebar>
                <Styles.Container>
                    <div style={{height: '60px',  borderBottom: '1px solid red'}}>tab nav</div>
                    <div>container</div>
                </Styles.Container>
            </div>
            <div style={{background:'#2A2C2F', border: '1px solid red', height: '60px'}}>footer</div>
        </>
    );
}


export default PortfolioPage;