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

    & .initial {
      width: 30px;
      height: 30px;
    }

    & .repo {
      width: 20px;
      height: 20px;
    }
  }
`
const SidebarRoot = styled.div`
  flex-grow: 1;
  overflow: hidden;

  & .root_wrap {
    padding-left: 20px;
  }

  & .title {
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    padding: 0 14px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }

  & .root {
    height: 30px;
    display: flex;
    align-items: center;
  }

  & .arrow_down {
    width: 10px;
    height: 10px;
    margin-right: 12px;
  }

  & .module_icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
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
    height: 60px;
    display: flex;
    flex-shrink: 0;
    border-bottom: 1px solid #2B2D30;
  }

  & .container {
    overflow-y: scroll;
    border-right: 3px solid transparent;
    box-sizing: border-box;

    & .container_wrap {
      padding: 60px;
      max-width: 820px;
    }
  }

  & .section_01 {
    display: flex;
    justify-content: space-between;
    padding-bottom: 46px;
    border-bottom: 1px solid ${props => props.theme.bgColor};

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

    & button {
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
    padding-bottom: 30px;
    border-bottom: 1px solid ${props => props.theme.bgColor};

    & > .title {
      font-size: 24px;
      font-weight: bold;
    }

    & .skill_list {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      gap: 18px;

      & .skill {
        display: flex;
        align-items: center;

        & .title {
          font-size: 16px;
          min-width: 100px;
        }

        & .tags {
          display: flex;
          gap: 13px;

          & .tag {
            color: #4493F8;
            //background: #143C59;
            background: ${props => props.theme.tagBgColor};
            padding: 4px 15px;
            border-radius: 50px;
          }
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
`

const StyeldLinkCircles = styled(Link)`
  width: 19px;
  height: 19px;
  border-radius: 50px;
  background: red;

  &.close {
    background: #ED6A5F;
  }

  &.hide {
    background: #FFBB2E;
  }

  &.full_screen {
    background: #61C454;
  }
`


const StyeldLinkRoot = styled(Link)`
  padding: 5px 0px 5px 66px;
  display: flex;
  align-items: center;

  height: 30px;

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
    StyeldLinkProject,
    StyeldLinkCircles,
    Footer,
}

export default {
    Header,
    Sidebar,
    SidebarRoot,
    Contents,
    StyeldLinkTab,
    StyeldLinkRoot,
    StyeldLinkProject,
    StyeldLinkCircles,
    Footer,
}