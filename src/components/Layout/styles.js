import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";

const Header = styled.div`
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  color: ${props => props.theme.textColor};
  //background: #2A2C2F;
  background: ${props => props.theme.bgColor};
  overflow: hidden;
  //background: linear-gradient(90deg, rgba(44,46,49,1) 0%, rgba(67,106,166,1) 8%, rgba(67,106,166,1) 23%, rgba(44,46,49,1) 37%);
  & .window_circles {
    max-width: 81px;
    margin-right: 33px;
  }

  & .user {
    display: flex;
    align-items: center;
    margin-right: 82px;
    & img {
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
  width: 270px;
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
  @media (max-width: 768px) {
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

  & .arrow_down {
    width: 10px;
    height: 10px;
    
  }
  
  & .module_icon {
    width: 20px;
    height: 20px;
    
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

    & .container_wrap {
      padding: 35px;
      max-width: 820px;
    }
  }

  & .section_01 {
    display: flex;
    justify-content: space-between;
    padding-bottom: 46px;
    border-bottom: 2px solid ${props => props.theme.sectionBorderColor};

    & .wrap {
      position: relative;
    }

    & .title {
      font-size: 48px;
      margin-top: 15px;
      font-weight: 600;
    }

    & .sub_title {
      font-size: 24px;
      font-weight: 500;
    }

    & img {
      display: block;
      width: 200px;
      height: 200px;
    }


  }

  & .section_02 {
    margin-top: 46px;
    padding: 20px 35px;
    font-weight: 500;
    line-height: 1.4;
    background: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
  }

  & .skills {
    margin-top: 36px;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.sectionBorderColor};
    padding: 20px 20px 30px;
      // border-bottom: 1px solid ${props => props.theme.bgColor};

    & > .title {
      font-size: 24px;
      font-weight: bold;
      color: ${props => props.theme.skillTitleColor};
    }

    & .skill_list {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      gap: 18px;

      & .skill {
        display: flex;
        align-items: baseline;

        & .title {
          font-size: 16px;
          font-weight: 800;
          min-width: 100px;
          color: ${props => props.theme.skillTextColor};
        }

        & .tags {
          //display: flex;
        }
      }

    }
  }

  & .Career {
    margin-top: 30px;
    font-weight: 500;
    line-height: 1.4;

    & > .title {
      font-size: 36px;
      font-weight: bold;
    }

    & .info_wrap {
      margin-top: 20px;
      padding: 20px;
      background: ${props => props.theme.bgColor};

      & .head {
        display: flex;
        justify-content: space-between;
      }

      & .text {
        margin-top: 20px;
      }
    }
  }

  & .Project {
    margin-top: 58px;

    & .title {
      font-size: 36px;
    }
  }
  @media (max-width: 900px) {
    & .section_01 {
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    & .container {
      & .container_wrap {
        padding: 30px;
      }
    }
  }
`

const StyeldLinkCircles = styled(Link)`
  width: 19px;
  height: 19px;
  border-radius: 50px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  &.close {
    background: #ED6A5F;
    & img{
      width: 13px;
    }
  }

  &.hide {
    background: #FFBB2E;
  }

  &.full_screen {
    background: #61C454;
  }
`
const StyeldLinkContact = styled(Link)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 164px;
  height: 44px;
  background: #4A88C7;
  border: 0;
  border-radius: 5px;
  font-size: 24px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    
  }
`

const StyeldLinkRoot = styled(Link)`
  padding: 5px 0px 5px 66px;
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

const StyeldLinkProject = styled(Link)`
  color: #56C2FF;
  margin-top: 10px;
  display: inline-block;
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
    StyeldLinkContact,
    StyeldLinkProject,
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
    StyeldLinkContact,
    StyeldLinkProject,
    StyeldLinkCircles,
    StyeldLinkMobile,
    Footer,
}