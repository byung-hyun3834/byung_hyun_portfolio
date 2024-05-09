import { Link } from 'react-router-dom';
import Styles, {Dock, MainContainer} from "./styles";
import MainLoading from "./components/MainLoading";

function MainPage() {
    return (
        <Styles.MainContainer>
                <Styles.Header>
                    byung_hyun_portfolio
                </Styles.Header>
                <Styles.StyeldLink to='/Portfolio'>
                    <img src={'/img/icons/ij_icon.png'}/>
                    Portfolio
                </Styles.StyeldLink>
                <MainLoading onClick={() => {console.log('asdfasdf')}}/>
                <Styles.Dock>
                    <div className="dockIcon">
                        <img src="/img/icons/ij_icon.png" />
                    </div>
                </Styles.Dock>
        </Styles.MainContainer>
    );
}


export default MainPage;