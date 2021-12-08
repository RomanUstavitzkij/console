import React from 'react';
import styled from "styled-components";

const StyledFlex = styled.div`
{
  display: flex;
  justify-content: ${({justify})=>justify || 'stretch'};
  align-items: ${({align})=>align || 'stretch'};;
  flex-direction: ${({direction})=>direction || 'row'};
  margin: ${({margin})=>margin || '0'};
}
`

const Flex = (props) => {
    return <StyledFlex {...props}/>
};

export default Flex;