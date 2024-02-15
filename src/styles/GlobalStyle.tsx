import { createGlobalStyle } from 'styled-components/macro';

import 'modern-normalize/modern-normalize.css';

import robotoLight from 'assets/fonts/roboto/roboto-lat-cyr-300.woff2';
import robotoRegular from 'assets/fonts/roboto/roboto-lat-cyr-regular.woff2';
import robotoMedium from 'assets/fonts/roboto/roboto-lat-cyr-500.woff2';
import robotoBold from 'assets/fonts/roboto/roboto-lat-cyr-700.woff2';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  /* robotoThin; robotoRegular; robotoMedium; robotoBold; */

  /* roboto-300 - latin_cyrillic */
  @font-face {
    font-style: normal;
    font-weight: 300;
    font-family: Roboto;
    src: local('Roboto Light'), local('Roboto'), url(${robotoLight}) format('woff2');
  }
  /* roboto-regular - latin_cyrillic */
  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: Roboto;
    src: local('Roboto Regular'), local('Roboto'), url(${robotoRegular}) format('woff2');
  }

  /* roboto-500 - latin_cyrillic */
  @font-face {
    font-style: normal;
    font-weight: 500;
    font-family: Roboto;
    src: local('Roboto Medium'), local('Roboto'), url(${robotoMedium}) format('woff2');
  }

  /* roboto-700 - latin_cyrillic */
  @font-face {
    font-style: normal;
    font-weight: 700;
    font-family: Roboto;
    src: local('Roboto Bold'), local('Roboto'), url(${robotoBold}) format('woff2');
  }

  @font-face {
    font-style: normal;
    font-weight: 200;
    font-family: 'Segoe UI';
    src: local('Segoe UI Light'), local('Segoe UI');
  }

  @font-face {
    font-style: normal;
    font-weight: 300;
    font-family: 'Segoe UI';
    src: local('Segoe UI Semilight'), local('Segoe UI');
  }

  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: 'Segoe UI';
    src: local('Segoe UI'), local('Segoe UI');
  }

  @font-face {
    font-style: normal;
    font-weight: 600;
    font-family: 'Segoe UI';
    src: local('Segoe UI Semibold'), local('Segoe UI');
  }

  @font-face {
    font-style: normal;
    font-weight: 700;
    font-family: 'Segoe UI';
    src: local('Segoe UI Bold'), local('Segoe UI');
  }

  html {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    height: 100vh;
    margin: 0;
    overflow: hidden;
 

    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell,
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({ theme }) => theme.colors.bg.body};

    transition: background-color ${({ theme }) => theme.transition[250]};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  li,
  p,
  a {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
