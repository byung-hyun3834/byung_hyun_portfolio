import styled from "styled-components";

const Container = styled.div`
  padding: 60px 40px 100px 40px;
  max-width: 820px;
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

      & img {
        display: block;
        width: 200px;
      }

      & .head {
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        }
      }
    }

    // & .more_info{
    //   display: flex;
    //   align-items: center;
    //   gap: 10px;
    //   margin: 20px auto 0;
    //   width: fit-content;
    //   padding: 5px 10px;
      //   border: 2px solid ${props => props.theme.sectionBorderColor};
    //   & .icon{
    //     width: 30px;
    //     height: 30px;
    //   }
    // }
  }
  @media (max-width: 600px) {
    padding: 60px 25px 25px 25px;
    & .pageTitle{
      font-size: 40px;
    }
  }
`


export {Container};

export default {Container};