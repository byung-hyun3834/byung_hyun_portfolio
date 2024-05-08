import styled from "styled-components";
const Container = styled.div`
  
  max-width: 820px;
  & .pageTitle{
    font-size: 48px;
    font-weight: bold;
  }
  & .tag_wrap{
    margin-top: 11px;
    display: inline-flex;
    border-radius: 4px;
    overflow: hidden;
    & span{
      padding: 3px 10px;
     background: #5E5E5E;
      &:nth-child(2) {
        background: #FFCF4D;
      }
    }
  }
  & .links_wrap{
    margin-top: 92px;
    & .title{
      font-size: 40px;
      font-weight: bold;
    }
    & .links{
      margin-top: 22px;
      width: 100%;
      border-left: 10px solid #4A88C7;
      background: #303236;
      padding: 36px 27px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 10px;
      & div{
        font-size: 20px;
        font-weight: 600;
      }
      & a{
        text-decoration: underline;
        color: #4493F8;
      }
    }
  }
  
`

export { Container };

export default { Container };