import styled, {css, keyframes} from 'styled-components';
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image:url("/img/bg/main_bg.jpg");
`
const Header = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  backdrop-filter: blur(10px);
  background: rgba(141, 141, 141, 0.5);
  padding: 0 40px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.33);

  & .initial {
    width: 20px;
    margin-right: 20px;
  }

  & .user_info {
    display: flex;
    align-items: center;

  }
`


const StyeldLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  text-shadow: 5px 5px 15px rgba(0, 0, 0, 0.83);

  & img {
    max-width: 200px;
    max-height: 200px;
  }
`;

const showIconAnimation = keyframes`
  0% {
    transform: scale(0.4);
    margin-top: -10px;
  }
  20% {
    transform: scale(1);
    margin-top: -20px;
  }
  60% {
    margin-top: 0;
  }
  100% {
    margin-top: 0;
  }
`;
const Dock = styled.div`
  position: absolute;
  height: 70px;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(217, 217, 217, 0.5);
  padding: 10px 20px 5px 20px;
  border-radius: 20px;
  text-align: center;
  
  & .dockIcon {
    width: 50px;
    transition: 0.2s;
    margin-top: 0;
    animation: ${props => props.open ? css`${showIconAnimation} 1.5s forwards` : 'none'};
     
    & img{
      display: block;
    }
    & .name{
      position: absolute;
      left: 50%;
      top: -60px;
      background: rgba(0, 0, 0, 0.5);
      color: rgba(255, 255, 255, 0.9);
      height: 10px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      transform: translateX(-50%);
      visibility: hidden;
      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        width: 0;
        height: 0;
        backdrop-filter: blur(13px);
        -webkit-backdrop-filter: blur(13px);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid rgba(0, 0, 0, 0.5);
      }
    }
    &:hover{
      & .name{
        visibility: visible;
      }
    }
  }
  & .run{
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 5px;
    background: #2A2C2F;
    border-radius: 50%;
  }
`

const IjModal = styled.div`
  position: absolute;
  max-width: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

export {
    MainContainer,
    Header,
    StyeldLink,
    Dock,
    IjModal,
}

export default {
    MainContainer,
    Header,
    StyeldLink,
    Dock,
    IjModal,
}