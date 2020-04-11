import styled, { css } from "styled-components";
import config from "../constants/config";

const { styling } = config;

const Button = styled.button`
  font-size: 20px;
  display: inline-block;
  padding: 15px 20px;
  color: white;
  background-color: ${styling.colors.primary};
  border-radius: 3px;
  box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.3);
  font-family: ${styling.typography.font};
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  line-height: 1;
  margin: 0;
  border: 0;
  cursor: pointer;

  &:hover {
    color: white;
  }

  /* inverted variant */
  ${props =>
    props.defaultValue &&
    css`
      color: white;
    `};

  /* Disabled variant */
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: #8b8b8b !important;
      background-color: #c4c4c4;
    `};
`;

export default Button;
