import styled, { css } from 'styled-components';

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
  background: linear-gradient(90deg, rgba(44,46,49,1) 0%, rgba(67,106,166,1) 8%, rgba(67,106,166,1) 23%, rgba(44,46,49,1) 37%);
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


export {

    Header,
    Sidebar,
    SidebarRoot,
    Container
}

export default {

    Header,
    Sidebar,
    SidebarRoot,
    Container
}