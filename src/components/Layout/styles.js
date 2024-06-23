import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";

const Header = styled.div`
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.textColor};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  background: ${props => props.theme.headerBgColor};
  overflow: hidden;
  box-sizing: border-box;
  & .window_circles {
    max-width: 81px;
    margin-right: 33px;
  }

  & .user {
    display: flex;
    align-items: center;
    margin-right: 82px;
    & .initial {
      color: rgb(78 146 233 / 54%);
      box-shadow: 30px 0 100px 150px ${props => props.theme.userInitialColor};
      //box-shadow: 30px 0 100px 150px rgb(78 146 233 / 54%);
      width: 20px;
      height: 20px;
      margin-right: 10px;
      border-radius: 4px;
    }
  }

  & .repo {
    display: flex;
    align-items: center;

    & img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  & .settings {
    width: 20px;
    height: 20px;
  }

  & .linkCircles_wrap {
    position: relative;
    display: flex;
    gap: 12px;
    margin-right: 33px;
    & img{
      opacity: 0;
    }
    &:hover{
      & img{
        opacity: 0.8;
      }
    }
  }
  @media (max-width: 600px) {
    & .user{
      margin-right: 0;
      & span{
        width: 70px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    & .repo{
      display: none;
    }
  }
`

const Sidebar = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 235px;
  //color: #fff;
  color: ${props => props.theme.textColor};
  //background: #2A2C2F;
  background: ${props => props.theme.bgColor};
  border-right: 1px solid ${props => props.theme.borderColor};

  & .project_wrap {
    width: 60px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid ${props => props.theme.borderColor};
    flex-shrink: 0;
    & .mobileIcon_wrap{
      display: flex;
      flex-direction: column;
    }
   

    & .repo {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 600px) {
    width: auto;
    & .project_wrap{
      border-right: none;
    }
  }
`
const SidebarRoot = styled.div`
  flex-grow: 1;
  overflow: hidden;

  & .root_wrap {
    padding: 0 10px;
  }

  & .title {
    height: 45px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    padding: 0 14px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }

  & .root {
    width: fit-content;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  & .module_icon {
    margin-right: 5px;
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

const Contents = styled.div`
  //background: #1E1F22;
  background: ${props => props.theme.contentBgColor};
  color: ${props => props.theme.textColor};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;

  & .tabs {
    overflow: auto;
    height: 45px;
    display: flex;
    flex-shrink: 0;
    border-bottom: 1px solid ${props => props.theme.borderColor};

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }

  & .container {
    overflow-y: scroll;
    border-right: 3px solid transparent;
    box-sizing: border-box;
  }

  
`

const StyeldLinkCircles = styled(Link)`
  width: 19px;
  height: 19px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.close {
    background: ${props => props.$modalVisible ? props.theme.activeColor : '#ED6A5F'};
    & img{
      width: 13px;
    }
  }

  &.hide {
    background: ${props => props.$modalVisible ? props.theme.activeColor : '#FFBB2E'};
  }

  &.full_screen {
    background: ${props => props.$modalVisible ? props.theme.activeColor : '#61C454'};
  }
`

const StyeldLinkRoot = styled(Link)`
  padding: 5px 0px 5px 55px;
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 4px;
  &.active {
    background: ${props => props.theme.activeColor};;
  }

`;

const StyeldLinkTab = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 20px;
  //color: #fff;
  color: ${props => props.theme.textColor};
  gap: 5px;

  & img {
    width: 20px;
    height: 20px;
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 4px;
    background: #4A88C7;
    border-radius: 5px;
    width: 100%;
  }
`;

const StyeldLinkMobile = styled(Link)`
  padding: 10px;
  border-radius: 4px;
  &.active {
    background: ${props => props.theme.activeColor};;
  }
`

const Footer = styled.div`
  background: ${props => props.theme.bgColor};
  border-top: 1px solid ${props => props.theme.borderColor};
  height: 40px;
  box-sizing: border-box;
`

export {
    Header,
    Sidebar,
    SidebarRoot,
    Contents,
    StyeldLinkTab,
    StyeldLinkRoot,

    StyeldLinkCircles,
    StyeldLinkMobile,
    Footer,
}

export default {
    Header,
    Sidebar,
    SidebarRoot,
    Contents,
    StyeldLinkTab,
    StyeldLinkRoot,

    StyeldLinkCircles,
    StyeldLinkMobile,
    Footer,
}