import styled, {keyframes} from "styled-components";

const Container = styled.div`
  padding: 40px 40px 100px 40px;
  max-width: 820px;
  margin: 0 auto;

  & .main_banner {
    text-align: center;
    position: relative;
    background: #D9D9D9;
    background-image: url("/img/bg/main_banner_bg.jpg");
    background-size: cover;

    & .wrap {
      backdrop-filter: blur(2px);
      padding: 100px 0 150px;
      position: relative;
      z-index: 2;
      color: #DFE1E5;
      

      & .br_mobile{
        display: none;
      }
      
      & .title {
        font-size: 24px;
        margin-top: -27px;
        font-weight: 600;
        line-height: 1.2;
      }

      & .sub_title {
        opacity: 0.5;
        font-size: 80px;
        font-weight: bold;
        
      }

      & .Introduction {
        padding: 0 10px;
        margin-top: 50px;
        line-height: 1.3;
        & strong {
          font-weight: bold;
          background: #61dafb;
        }
      }
    }
  }

  & .aboutMe {
    margin-top: 50px;

    & .title {
      font-size: 40px;
      font-weight: bold;
    }

    & .wrap {
      border: 1px solid ${props => props.theme.sectionBorderColor};
      border-radius: 4px;
      margin-top: 30px;
      padding: 20px 20px 20px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      position: relative;
      gap: 35px;
    }

    & .border_info {
      position: absolute;
      top: 20px;
      left: 20px;
    }

    & .tag_wrap {
      margin-top: 11px;
      display: inline-flex;
      width: fit-content;
      border-radius: 4px;
      overflow: hidden;

      & span {
        padding: 3px 10px;
        background: #5E5E5E;
        color: #fff;

        &:nth-child(2) {
          background: #FFCF4D;
          color: #282c34;
        }
      }
    }

    & .profile_wrap {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      & img {
        display: block;
        width: 150px;
        height: 150px;
      }
    }

    & .links {
      width: 100%;
      border-radius: 4px;
      border: 1px solid ${props => props.theme.sectionBorderColor};
      background: ${props => props.theme.bgColor};
      padding: 20px 27px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: fit-content;
      gap: 10px;

      & .profile {
        text-align: center;
        margin-bottom: 15px;

        & .name {
          font-size: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid ${props => props.theme.sectionBorderColor};
        }
      }

      & .link_title {
        font-size: 15px;
      }

      & .link_text {
        color: #4493F8;

        &:hover {
          text-decoration: underline;
        }
      }
    }

  }

  & .Interview_wrap {
    margin-top: 46px;
    padding: 20px 50px 50px;
    font-weight: 500;
    line-height: 1.4;
    border-left: 5px solid #4A88C7;
    background: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};

    & .title {
      color: #4A88C7;
      font-size: 30px;
    }

    & .text {
      font-size: 16px;
      margin-top: 20px;
    }
  }

  & .skills {
    margin-top: 36px;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.sectionBorderColor};
    padding: 20px 20px 30px;
    background: ${props => props.theme.skillBgColor};

    & > .title {
      font-size: 30px;
      font-weight: 500;
        // color: ${props => props.theme.skillTitleColor};
    }

    & .skill_list {
      margin-top: 40px;
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

  @media (max-width: 900px) {
    & .main_banner {
      & img {
        margin-top: 25px;
        margin-left: auto;
        width: 100px;
        height: 100px;
      }
    }
  }

  @media (max-width: 768px) {
    & .main_banner {
      & .wrap {
        & .br_mobile{
          display: block;
        }
        & .br_pc{
          display: none;
        }
        
        & .title {
          margin-top:-15px;
          font-size: 18px;
        }
        & .sub_title {
          font-size: 50px;
        }
      }
    }
    
    & .aboutMe{
      & .wrap{
        align-items: center;
        flex-direction: column;  
      }
    }

    & .Interview_wrap{
      padding: 20px 20px 50px;
    }
  }

  @media (max-width: 600px) {

    padding: 60px 20px 70px 20px;

    & .main_banner {
      & .wrap {
        & .title {
          
        }

        & .sub_title {
          
        }
      }
    }
  }
`

export {
    Container
}

export default {
    Container
}