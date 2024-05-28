import styled, {css} from 'styled-components';


const Tag = styled.span`
    color: #4493F8;
    display: inline-block;
    background: ${props => props.theme.tagBgColor};
    padding: 4px 15px;
    border-radius: 50px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-weight: 600;
`

export {
    Tag
}

export default {
    Tag
}