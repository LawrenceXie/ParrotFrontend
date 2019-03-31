import styled, { css } from 'styled-components';
import vars from './vars';

const {
  greyLight,
  greyLighter,
  lightMediumGrey,
  purpleLightest,
  purpleLighter,
  purple,
  purpleDark,
  purpleText,
  white,
  darkRed,
  red,
  lightRose,
} = vars.colour;

const baseRules = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${vars.button.borderRadius};
  border: 1px solid ${purple};
  padding-left: 3.9rem;
  padding-right: 3.9rem;
  height: 5.8rem;
  font-size: 1.6rem;
  line-height: 1.6rem;
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
  background-color: ${p => (p.outline ? white : purple)};
  color: ${p => (p.outline ? purple : white)};
  border-color: ${purple};
  &:hover:not([disabled]) {
    border-color: ${purpleDark};
    background-color: ${p => (p.outline ? white : purpleDark)};
  }
`;

const secondaryRules = css`
  background-color: ${purpleLightest};
  border-color: ${purple};
  color: ${purple};
  &:hover:not([disabled]) {
    background-color: ${purpleLighter};
  }
`;

const cancelRules = css`
  background-color: ${lightMediumGrey};
  border-color: ${lightMediumGrey};
  color: ${purpleText};
  &:hover:not([disabled]) {
    background-color: ${greyLight};
    border-color: ${greyLight};
    color: ${purpleText};
  }
`;

const warningRules = css`
  background-color: ${darkRed};
  color: ${white};
  border-color: ${darkRed};
  &:hover:not([disabled]) {
    border-color: ${red};
    background-color: ${red};
  }
  &[disabled] {
    background-color: ${lightRose};
    border-color: ${lightRose};
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
