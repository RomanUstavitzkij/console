import React from "react";
import styled, {css, keyframes} from "styled-components";

const RotateButton = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`

const StyledButton = styled.button`
{
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 18px;
  align-self: ${({align}) => align || 'stretch'};

  &:focus {
    outline: none;
  }

  &:hover {
    animation: ${RotateButton} 2s infinite linear;
  }

  ${props => props.primary && css`
    color: ${({color}) => color || 'green'};
    background: ${({background}) => background || 'black'};
  `}
  ${props => props.secondary && css`
    color: green;
    background: transparent;
    border: 1px solid ${({color}) => color || 'white'};
  `}
}
`

const Button = (props) => {
    return <StyledButton {...props}/>
}

export default Button