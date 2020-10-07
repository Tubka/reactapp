import styled, { createGlobalStyle } from 'styled-components';

const a = 100;


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
    color: ${({ theme }) => theme.text};
    // display: flex;
    flex-direction: column;
    // justify-content: center;
    // height: 100vh;
    // margin: 0;
    // padding: 0;
    // font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: 0.2s;
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
    padding: 0 ${a}px;
    background-color: #00aeff;
  }

  menu__item {
    padding-left: 100px;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  menu {
    width: 200px;
    padding:0;
    background-color: #00aeff;
    position: absolute;
    top: 60px;
    right: 100px;
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
    // margin-bottom: 6px
    // padding: 4px 40px;
  }
  
  a {
    color: ${({ theme }) => theme.text};
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    transition: 0.2s;
    padding: 5px 40px;
  }

  `

  export const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: #123;
    color: white;
    border: 2px solid white;

    &:hover {
      background-color: red;
      cursor: pointer;
    }
    `