import styled, { createGlobalStyle } from 'styled-components';
import { barVariables } from './variables/barVariables'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s;
  }
  
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
    padding: 0 ${barVariables.paddingMenu};
    background-color: ${barVariables.barColor};
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
    right: 0px;
    margin:0;
    // padding-right:50px;
    display: flex;
    flex-direction: column;
  }

  ul { 
    width: 100%
    background-color: red;
  }

  li { 
    width: 100%;
    text-align: center;
    
    &:hover { 
      // background-color: #2dbdff;
    }
  }
  
  a {
    color: ${({ theme }) => theme.text};
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    transition: 0.3s;
    padding: 5px 40px;
    &:hover { 
      background-color: #2dbdff;
    }
  }

  .menu__darkmode {
    padding-top: 10px;
  }
  `

  export const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: #1c5c9c;
    color: white;
    border: 1px solid white;
    
    &:hover {
      background-color: #2dbdff;
      cursor: pointer;
    }
    `