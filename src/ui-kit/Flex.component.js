import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
`;

const Flex = ({children}) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Flex;
