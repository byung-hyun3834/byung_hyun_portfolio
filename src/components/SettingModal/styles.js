import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";

const SettingModal = styled.div`
  & .overlay {
    background: rgba(0, 0, 0, 0.35);
    bottom: 0;
    height: 100%;
    left: 0;
    opacity: 0.5;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 99;
  }

  & .modal_wrap {
    position: fixed;
    width: 80%;
    max-width: 350px;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    background: ${props => props.theme.bgColor};
    z-index: 100;
    border: 1px solid #77797A;
    border-radius: 10px;
    padding: 10px 10px 40px 10px;
    & .header {
      position: relative;
      & .title {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        text-align: center;
        font-weight: bold;
        color: #9FA0A2;
        z-index: -1;
      }
    }

    & .rootInfo {
      margin-top: 25px;
      font-weight: 600;
    }

    & .setTheme {
      display: flex;
      margin-top: 20px;

      & .title {
        margin-right: 50px;
      }
    }
  }

  & .linkCircles_wrap {
    display: flex;
    gap: 12px;

    & img {
      opacity: 0;
    }

    &:hover {
      & img {
        opacity: 0.8;
      }
    }

    & .circles {
      width: 19px;
      height: 19px;
      border-radius: 50px;
      background: red;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props => props.theme.activeColor};

      &.close {
        background: #ED6A5F;

        & img {
          width: 13px;
        }
      }

      &.hide {

        box-sizing: border-box;
        background: ${props => props.theme.activeColor};
      }

      &.full_screen {
        background: #61C454;
      }
    }
  }
`

const ThemeToggleContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  & .item{
    text-align: center;
    font-weight: 600;
    color: ${props => props.theme.iconColor};
    & .icon{
      width: 50px;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 10px;
      
      &.active{
        background: ${props => props.theme.activeColor};
      }
    }
    
  }
`

export {SettingModal, ThemeToggleContainer};
export default {SettingModal, ThemeToggleContainer};