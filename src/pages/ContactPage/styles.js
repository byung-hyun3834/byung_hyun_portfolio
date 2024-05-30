import styled from "styled-components";

const Container = styled.div`
  & .pageTitle {
    font-size: 48px;
    font-weight: bold;
  }

  & .tag_wrap {
    margin-top: 11px;
    display: inline-flex;
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

  & .links_wrap {
    margin-top: 92px;

    & .title {
      font-size: 40px;
      font-weight: bold;
    }

    & .links {
      margin-top: 22px;
      width: 100%;
      border-left: 5px solid #4A88C7;
      background: ${props => props.theme.bgColor};
      padding: 36px 27px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 10px;

      & div {
        font-size: 20px;
        font-weight: 600;
      }

      & a {
        text-underline-offset: .3rem;
        color: #4493F8;
        &:hover{
          text-decoration: underline;  
        }
      }
    }
  }

`

const Form = styled.form`
  & .emailTitle {
    margin-top: 50px;
    font-size: 35px;
    font-weight: bold;
  }

  & .emailSubTitle {
    margin-top: 10px;
    font-size: 14px;
  }

  & .emailFormWrap {
    display: flex;
    margin-top: 40px;
    gap: 40px;
    padding: 30px;
    border-left: 5px solid #4A88C7;
    background: ${props => props.theme.bgColor};

    & .emailForm {
      width: 100%;
      flex: 1;
      &:first-child {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }

      & .labelItem {
        display: flex;
        flex-direction: column;

        & label {
          font-size: 18px;
          font-weight: 600;
        }

        & input {
          margin-top: 10px;
          background: none;
          border: none;
          border-bottom: 2px solid ${props => props.theme.inputBorder};
          padding: 3px;
          width: 100%;
          box-sizing: border-box;
          &:focus {
            outline: none;
            border-bottom: 2px solid #4493F8;
          }
        }

        & textarea {
          margin-top: 10px;
          height: 200px;
          resize: none;
          border: 2px solid ${props => props.theme.inputBorder};
          background: transparent;
          box-sizing: border-box;
          &:focus {
            outline: none;
            border: 2px solid #4493F8;
          }
        }
      }
      & .submit{
        font-size: 18px;
        margin-top: 20px;
        padding: 10px 0;
        width: 100%;
        border: none;
        color: #fff;
        background: #4A88C7;
      }
    }
  }
  @media (max-width: 768px) {
    & .emailFormWrap{
      flex-direction: column;
    }
  }
`

export {Container, Form};

export default {Container, Form};