import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #FFF;
    font-family: 'Nunito', sans-serif;
  }

  body {
    background-color: #1a1a1e;
  }
`;
