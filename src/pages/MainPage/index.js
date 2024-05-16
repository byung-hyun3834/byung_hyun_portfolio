import Styles, {Dock, MainContainer} from "./styles";
import React from "react";

function MainPage() {
    return (
        <Styles.MainContainer>
                <Styles.Header>
                    <img className="initial" src={'/img/icons/user_ initial.png'} />byung_hyun_portfolio
                </Styles.Header>
                <Styles.StyeldLink to='/Portfolio'>
                    <img src={'/img/icons/ij_icon.png'}/>
                    Portfolio
                </Styles.StyeldLink>
                <Styles.Dock>
                    <div className="dockIcon">
                        <img src="/img/icons/ij_icon.png" />
                    </div>
                </Styles.Dock>
        </Styles.MainContainer>
    );
}


export default MainPage;