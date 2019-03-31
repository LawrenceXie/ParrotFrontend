import styled from "styled-components";
import vars from "../vars";
import ValidIcon from "./assets/valid-icon.svg";
import ErrorIcon from "./assets/error-icon.svg";

const Input = styled.input`
  font-size: 1rem;
  height: 2.4rem;
  padding: 0 4rem 0 1rem;
  border: 1px solid ${vars.colour.greyLight};
  border-radius: 2px;
  background-position: right 1rem top 50%;
  background-size: 1.4rem;
  background-repeat: no-repeat;
  outline: none;
  transition: all 200ms ease-out;
  ${({ fit }) => fit && `display: table-cell; width: 100%;`};
  ${({ isValid }) => isValid && `background-image: url(${ValidIcon})`};
  ${({ hasError }) =>
    hasError &&
    `
    background-image: url(${ErrorIcon});
    border-color: ${vars.colour.redError};
  `};
  &[disabled] {
    color: ${vars.colour.grey};
    background-color: ${vars.colour.greyLightest};
  }
  &:focus {
    border-color: ${vars.colour.blueMain};
  }
  &::placeholder {
    color: ${vars.greyLight};
  }
`;

export default Input;
