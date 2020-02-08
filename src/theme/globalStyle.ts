import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Karla', Roboto, Helvetica Neue, sans-serif;
  font-size: 1.3rem;
`;

export const GlobalStyle = createGlobalStyle`
body {
   ${bodyStyles}
}`;
