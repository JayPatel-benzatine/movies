import styled from "styled-components"

export const Toggler = styled.button`
display: flex;
position: absolute;
right: 20px;
top: 135px;
width: 35px;
height: 35px;
align-items: center;
justify-content: center;
color: ${props => props.theme.toggleIcon};
background-color: transparent;
transition: all ${props => props.theme.transitionTime};
border: none;
outline: none;
cursor: pointer;
`

