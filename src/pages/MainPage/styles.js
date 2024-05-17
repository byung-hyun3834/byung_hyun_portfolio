import styled, { css } from 'styled-components';
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
  color: #fff;
  background: rgba(217, 217, 217, 0.5);
  padding: 0 40px;
  & .initial{
    width: 20px;
    margin-right: 20px;
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
  & img {
    max-width: 200px;
    max-height: 200px;
  }
`;
const Dock = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(217, 217, 217, 0.5);
  padding:10px 20px 5px 20px;
  border-radius: 15px;
  & .dockIcon{
    width: 50px;
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