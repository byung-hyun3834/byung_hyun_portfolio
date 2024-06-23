import styled, {css} from 'styled-components';


const Tag = styled.span`
    color: ${props => props.theme.tagTextColor};
    display: inline-block;
    background: ${props => props.theme.tagBgColor};
    padding: 2px 15px 4px 15px;
    border-radius: 50px;
    margin-right: 10px;
    margin-bottom: 10px;
    
`

export {
    Tag
}

export default {
    Tag
}