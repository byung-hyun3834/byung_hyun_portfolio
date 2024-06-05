import {Link, useNavigate} from 'react-router-dom';
import Styles, {Dock, MainContainer} from "./styles";
import React, {useState, useEffect} from "react";
import CustomDate from "../../components/CustomDate";
import WaveAnimation from "../../components/Wave/WaveAnimation"


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

function MainPage({iconRun, setIconRun}) {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(true);
        setIconRun(true);
        setTimeout(() => {
            navigate('/Portfolio');
        }, 2000); // 3초 지연
    };



    return (
        <Styles.MainContainer>
            <WaveAnimation />
            <IjModal open={open}/>
            <Styles.Header>
                <div className="user_info">
                    <img className="initial" src={'/img/icons/user_ initial.png'}/>
                    <span>byung_hyun_portfolio</span>
                </div>
                <CustomDate/>
            </Styles.Header>
            <Styles.StyeldLink onClick={handleClick}>
                <img src={'/img/icons/ij_icon.png'}/>
                Portfolio
            </Styles.StyeldLink>
            {
                iconRun &&
                <Styles.Dock open={open}>
                    <div className="dockIcon">
                        <Link to="/Portfolio">
                            <div className="name">Portfolio</div>
                            <img src="/img/icons/ij_icon.png"/>
                        </Link>
                    </div>
                    <div className="run"></div>
                </Styles.Dock>
            }

        </Styles.MainContainer>
    );
}


export default MainPage;