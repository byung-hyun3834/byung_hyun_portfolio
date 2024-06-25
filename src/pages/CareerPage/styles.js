import styled from "styled-components";

const Container = styled.div`
  padding: 60px 40px 100px 40px;
  max-width: 820px;
  margin: 0 auto;
  & .pageTitle {
    font-size: 48px;
    font-weight: bold;
    padding-bottom: 10px;
    display: inline-block;
    border-bottom: 3px solid ${props => props.theme.userInitialColor};
  }

  & .tag_wrap {
    margin-top: 11px;
    display: flex;
    width: fit-content;
    border-radius: 4px;
    overflow: hidden;

    & span {
      padding: 3px 10px;
      background: #5E5E5E;
      color: #fff;

      &:nth-child(2) {
        background: #FFCF4D;
      }
    }
  }

  & .Career {
    margin-top: 55px;
    font-weight: 500;
    line-height: 1.4;

    & .info_wrap {
      margin-top: 20px;
      padding: 20px 20px 50px 20px;
      background: ${props => props.theme.bgColor};

      & .head {
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      & .date{
        color: #4A88C7;
      }

      & .info_text {
        margin-top: 20px;
      }

      & .mid_line {
        width: 100%;
        height: 1px;
        background: #4A88C7;
        margin-top: 20px;
      }

      & .description {
        margin-top: 20px;

        & .text {
          margin-top: 10px;
          padding-left: 10px;
          font-size: 15px;
          font-weight: 300;
          & a{
            font-weight: bold;
            color: #4A88C7;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    padding: 60px 20px 70px 20px;
    & .pageTitle{
      font-size: 40px;
    }
    
  }
`


export {Container};

export default {Container};