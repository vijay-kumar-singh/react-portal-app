import { createGlobalStyle } from "styled-components";
import config from "./constants/config";

const { styling } = config;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${styling.typography.font};
  }
  h1 {
    font-size: 3em;
    line-height: 1;
    margin-bottom: 0.5em;
  }
  h2 {
    font-size: 2em;
    margin-bottom: 0.75em;
  }
  h3 {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: 1em;
  }
  h4 {
    font-size: 1.2em;
    line-height: 1.25;
    margin-bottom: 1.25em;
  }
  h5 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 1.5em;
  }
  h6 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 1.5em;
  }
  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;