import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
`;

const Flex = ({className, children}) => (
  <StyledDiv className={className}>
    {children}
  </StyledDiv>
);

export default Flex;
