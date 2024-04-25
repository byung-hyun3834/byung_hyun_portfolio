import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  ${props =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  color: #fff;
  background: rgba(217, 217, 217, 0.5);
  padding: 0 40px;
`

const Sidebar = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 270px;
  color: #fff;
  background: #2A2C2F;
`
const SidebarRoot = styled.div`
  flex-grow: 1;
  border-right: 1px solid red;
`

const Container = styled.div`
  flex-grow: 1;
  width: 100%;
  background: #1E1F22;
`

const StyeldLink = styled(Link)`
    border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & img{
    max-width: 280px;
    max-height: 280px;
  }
`;

export {

    Header,
    Sidebar,
    SidebarRoot,
    Container,
    StyeldLink
}

export default {

    Header,
    Sidebar,
    SidebarRoot,
    Container,
    StyeldLink
}