import styled, {css} from 'styled-components';
import {Link} from "react-router-dom";

const SettingModal = styled.div`
  & .overlay{
    background: #000;
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
  & .modal_wrap{
    position: fixed;
    width: 500px;
    height: 250px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.bgColor};
    z-index: 100;
    border: 1px solid #77797A;
    border-radius: 10px;
    padding: 10px;
    & .header{
      
    }
  }
  & .linkCircles_wrap{
    display: flex;
    gap: 12px;
    & img{
      opacity: 0;
    }
    &:hover{
      & img{
        opacity: 0.8;
      }
    }
    
    & .circles{
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
  gap: 50px;
  margin-top: 50px;
  justify-content: center;
  & .item{
    border: 1px solid red;
    padding: 20px;
  }
`

export {SettingModal, ThemeToggleContainer};
export default {SettingModal, ThemeToggleContainer};