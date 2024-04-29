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
  height: 40px;
  padding:  0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: linear-gradient(90deg, rgba(44,46,49,1) 0%, rgba(67,106,166,1) 8%, rgba(67,106,166,1) 23%, rgba(44,46,49,1) 37%);
  & .window_circles{
    max-width: 81px;
    margin-right: 33px;
  }
  & .user{
    display: flex;
    align-items: center;
    margin-right: 82px;
    & img{
      width: 20px;
      height: 20px;
    }
  }
  & .repo{
    display: flex;
    align-items: center;
    & img{
      width: 20px;
      height: 20px;  
    }
  }
  & .settings{
    width: 20px;
    height: 20px;
  }
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
  & .title{
    font-size: 20px;
    font-weight: 600;
    padding: 0 14px;
  }
  & .root{
    display: flex;
  }
`

const Contents = styled.div`
  flex-grow: 1;
  width: 100%;
  background: #1E1F22;
  color: #fff;
  & .container{
    border: 1px solid red;
    padding: 60px;
    max-width: 734px;
  }
  & .first_section{
    border: 1px solid greenyellow;
    display: flex;
    justify-content: space-between;
    & img{
      display: block;
      width: 200px;
      height: 200px;
    }
  }
`
export {
    Header,
    Sidebar,
    SidebarRoot,
    Contents
}

export default {

    Header,
    Sidebar,
    SidebarRoot,
    Contents
}