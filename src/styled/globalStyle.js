import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.1s linear;
  }
  
  .button {
      color: ${({ theme }) => theme.btnText};
      background-color: ${({ theme }) => theme.btnBackground};
  }

  .nav {
    height: 100px;
    width: 100%;
    background-color: #00aeff;
  }
  `
