import styled, {css, keyframes} from 'styled-components';



const loadingAnimation = keyframes`
  0% {
    background-position: 200% 0;
    
  }
  100% {
    background-position: -200% 0;
  }
`;

const SkeletonLayout = styled.div`
  border-radius: 5px;
  overflow: hidden;
  background: ${props => props.theme.projectBgColor};
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  width: 100%;
  & .skeleton_img{
    width: 100%;
    height: 0;
    overflow: hidden;
    position: relative;
    padding-top: 66.5%;
    & .skeleton_img_inner{
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      // width: 100%;
      // min-height: 175px;
       background: linear-gradient(90deg, ${props => props.theme.skeletonBaseColor}, ${props => props.theme.skeletonColor}, ${props => props.theme.skeletonBaseColor});
       background-size: 200% 100%;
       animation: ${loadingAnimation} 1.5s infinite;  
    }
  }
  & .HeaderContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  & .wrap{
    padding: 13px 13px 30px 13px;
    & .description{
      margin-top: 20px;
      height: 16.8px;
    }
    & .tag{
      margin-top: 20px;
      height: 24px;
    }
    & .button_group{
      margin-top: 40px;
      height: 31px;
    }
  }
  
`

const SkeletonSpan = styled.span`
  display: block;
  background: linear-gradient(90deg, ${props => props.theme.skeletonBaseColor}, ${props => props.theme.skeletonColor}, ${props => props.theme.skeletonBaseColor});
  background-size: 200% 100%;
  animation: ${loadingAnimation} 1.5s infinite;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 4px;
`;

export {
    SkeletonLayout,
    SkeletonSpan,
}

export default {SkeletonLayout, SkeletonSpan}