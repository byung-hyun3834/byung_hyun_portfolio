import { Link } from 'react-router-dom';
import Styles, {Header, StyeldLink} from "./styles";

function MainPage() {
    return (
        <>

            <div style={{width:'100%', height:'100vh', backgroundSize: 'cover', backgroundImage: `url("/img/bg/main_bg.jpg")`}}>

                <Styles.Header>
                    byung_hyun_portfolio
                </Styles.Header>
                <StyeldLink to='/Portfolio'>
                    <img src={'/img/icons/ij_icon.png'}/>
                    port
                </StyeldLink>



            </div>
        </>
    );
}


export default MainPage;