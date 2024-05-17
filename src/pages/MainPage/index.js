import {Link, useNavigate} from 'react-router-dom';
import Styles, {Dock, MainContainer} from "./styles";
import React, {useState, useEffect} from "react";


const IjModal = ({open}) => {
    return (
        <>
            {
                open ?
                    <Styles.IjModal>
                        <img src={'/img/resource/ij_loading.jpg'}/>
                    </Styles.IjModal>
                    : ''
            }
        </>
    )
}

function MainPage() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(true);
        setTimeout(() => {
            navigate('/Portfolio');
        }, 3000); // 3초 지연
    };

    return (
        <Styles.MainContainer>
            <IjModal open={open}/>
            <Styles.Header>
                <img className="initial" src={'/img/icons/user_ initial.png'}/>byung_hyun_portfolio
            </Styles.Header>
            <Styles.StyeldLink onClick={handleClick}>
                <img src={'/img/icons/ij_icon.png'}/>
                Portfolio
            </Styles.StyeldLink>
            <Styles.Dock>
                <div className="dockIcon">
                    <img src="/img/icons/ij_icon.png"/>
                </div>
            </Styles.Dock>
        </Styles.MainContainer>
    );
}


export default MainPage;