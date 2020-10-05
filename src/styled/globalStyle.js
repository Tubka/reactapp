import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    // align-items: center;
    background: ${({ theme }) => theme.body};
    // color: white;
    // color: ${({ theme }) => theme.text};
    // display: flex;
    flex-direction: column;
    // justify-content: center;
    // height: 100vh;
    // margin: 0;
    // padding: 0;
    // font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.1s linear;
  }
  
  // .button {
  //     display: block;
  //     color: ${({ theme }) => theme.btnText};
  //     background-color: ${({ theme }) => theme.btnBackground};
  // }

  //STYLE NAVBAR

  .navBar {
    // position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    padding: 0 100px;
    background-color: #00aeff;
  }

  ul {
    list-style-type: none;
  }

  // .hiddenButton {
  //   display: inline;
  // }

  menu {
    width: 200px;
    padding:0;
    background-color: #00aeff;
    position: absolute;
    top: 70px;
    right: 0;
    margin:0;
    // padding-right:50px;
    display: flex;
    flex-direction: column;
  }

  ul { 
    width: 100%
  }

  li { 
    width: 100%;
    margin-bottom: 6px
  }

  a {
    color: white;
    display: inline-block;
    height: 100%;
    width: 100%;
  }
  `
