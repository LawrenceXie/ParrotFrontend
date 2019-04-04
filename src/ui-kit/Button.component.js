import styled, { css } from "styled-components";
import vars from "./vars";

const {
  blueMain,
  blueDark,
  blueLight,
  blueText,
  redError,
  redLight,
  redDark,
  greyLighter,
  greyLight,
  mediumGrey,
  white
} = vars.colour;

const baseRules = css`
  display: flex;
  flex-direction: row;
  font-family: segan;
  justify-content: center;
  align-items: center;
  border-radius: ${vars.button.borderRadius};
  border: 1px solid ${blueMain};
  padding-left: 1.9rem;
  padding-right: 1.9rem;
  height: 2.8rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
  cursor: pointer;
  outline: none;
  appearance: none;
  transition: all 200ms ease-out;
  > * {
    vertical-align: middle;
  }
  &[disabled] {
    background-color: ${greyLighter};
    border-color: ${greyLight};
    color: ${greyLight};
    cursor: initial;
  }
  *::-ms-backdrop,
  & {
    display: block;
    margin-bottom: -0.4rem;
  }
`;

const primaryRules = css`
  background-color: ${p => (p.outline ? white : blueMain)};
  color: ${p => (p.outline ? blueMain : white)};
  border-color: ${blueMain};
  &:hover:not([disabled]) {
    border-color: ${blueDark};
    background-color: ${p => (p.outline ? white : blueDark)};
  }
`;

const secondaryRules = css`
  background-color: ${blueLight};
  border-color: ${blueMain};
  color: ${blueMain};
  &:hover:not([disabled]) {
    background-color: ${blueLight};
  }
`;

const cancelRules = css`
  background-color: ${mediumGrey};
  border-color: ${mediumGrey};
  color: ${blueText};
  &:hover:not([disabled]) {
    background-color: ${greyLight};
    border-color: ${greyLight};
    color: ${blueText};
  }
`;

const warningRules = css`
  background-color: ${redDark};
  color: ${white};
  border-color: ${redDark};
  &:hover:not([disabled]) {
    border-color: ${redError};
    background-color: ${redError};
  }
  &[disabled] {
    background-color: ${redLight};
    border-color: ${redLight};
    color: ${white};
    cursor: initial;
  }
`;

const smallRules = css`
  height: 4rem;
  padding-left: 2.2rem;
  padding-right: 2.2rem;
`;

const Button = styled.button`
  ${baseRules}
  ${({ primary }) => (primary ? primaryRules : secondaryRules)}
  ${({ cancel }) => cancel && cancelRules}
  ${({ warning }) => warning && warningRules}
  ${({ small }) => small && smallRules}
  ${({ fit }) =>
    fit &&
    `
    min-width: 0;
    width: 100%;
  `}
`;

export default Button;
