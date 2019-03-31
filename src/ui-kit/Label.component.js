import React from "react";
import styled from "styled-components";
import vars from "./vars";

const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: ${vars.colour.blueText};
  input {
    display: ${props => (props.inline ? "inline-block" : "block")};
    margin-left: ${props => (props.inline ? "0.5rem" : "0")};
  }
`;

export const Label = ({ children, inline, htmlFor, ...props }) => (
  <StyledLabel {...props} inline={inline} htmlFor={htmlFor}>
    {children}
  </StyledLabel>
);
