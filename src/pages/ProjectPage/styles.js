import styled from "styled-components";
const Container = styled.div`
  
  max-width: 820px;
  & .pageTitle{
    font-size: 48px;
    font-weight: bold;
  }
  & .list_wrap{
    margin-top: 55px;
    display: grid;
    grid-template-columns:  repeat(2,1fr);
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }
  & .item{
    border-radius: 5px;
    overflow: hidden;
    
    background: ${props => props.theme.bgColor};
    & .wrap{
      padding: 13px 13px 30px 13px;
    }
    & .title{
      font-size: 20px;
    }
    & .text{
      margin-top: 30px;
      font-size: 16px;
    }
    & .tags{
      margin-top: 20px;
      & .tag{
        color: #4493F8;
        background: #143C59;
        padding: 4px 15px;
        border-radius: 50px;
        margin-right: 10px;
        margin-bottom: 10px;
        display: inline-block;
      }
    }
    & .button_group{
      display: inline-flex;
      margin-top: 30px;
      border-radius: 4px;
      overflow: hidden;
      & button{
        color: #fff;
        background: #5F5F5F;
        border: 0;
        padding: 8px 20px;
        &:nth-child(2) {
          background: #4FC921; /* 두 번째 버튼에만 다른 색상 적용 */
        }
      }
    }
  }
`

export { Container };

export default { Container };