import styled, {css, keyframes} from 'styled-components';
import {SkeletonSpan} from "../../../../components/SkeletonItem/styles";

const loadingAnimation = keyframes`
  0% {
    background-position: 200% 0;
    
  }
  100% {
    background-position: -200% 0;
  }
`;
const Card = styled.div`

  border-radius: 5px;
  overflow: hidden;
  background: ${props => props.theme.projectBgColor};
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.35);

  & .img_wrap {
    min-height: 120px;
    position: relative;

    & img {
      width: 100%;
      display: block;
    }
  }

  & .wrap {
    padding: 25px 13px 25px 13px;
  }

  & .title {
    font-size: 18px;
    font-weight: 600;
  }

  & .description {
    margin-top: 12px;
    font-size: 14px;
    line-height: 1.2;
    opacity: 0.7;
  }

  & .tags {
    margin-top: 20px;
    padding-bottom: 5px;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      height: 1px;
      background: ${props => props.theme.sectionBorderColor};
    }
  }

  & .button_group {
    margin-top: 25px;
    & a {
      display: inline-block;
      color: #fff;
      background: #5F5F5F;
      border: 0;
      padding: 10px 20px;
      margin-right: 10px;
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: bold;
      border-radius: 4px;
      opacity: 0.8;
      &:hover{
        opacity: 1;
      }
    }
    & .git{
      background: #6B6BF1;
    }
  }

`

const Skeleton = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  position: relative;
  padding-top: 66.5%;
  & .inner{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(90deg, ${props => props.theme.skeletonBaseColor}, ${props => props.theme.skeletonColor}, ${props => props.theme.skeletonBaseColor});
    background-size: 200% 100%;
    animation: ${loadingAnimation} 1.5s infinite;  
  }
  
`

export {Card, Skeleton}

export default {Card, Skeleton}