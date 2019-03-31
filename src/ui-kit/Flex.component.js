import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const Flex = ({ className, children }) => (
  <StyledDiv className={className}>{children}</StyledDiv>
);

export default Flex;
