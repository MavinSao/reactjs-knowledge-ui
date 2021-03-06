// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  body {
    // background: #fcfcfc;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  
  .icon {
    -webkit-filter: ${({ theme }) => theme.invert};
  }
  .nav-bar{
    border-color: ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.nav};
    transition: all 0.50s linear;
  }
  .menu-bar{
    border-color: ${({ theme }) => theme.border};
    transition: all 0.50s linear;
  }


`;
 
export default GlobalStyle;