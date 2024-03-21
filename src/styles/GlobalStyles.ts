import {createGlobalStyle} from 'styled-components';
import {theme} from './theme';

export const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //outline: 1px solid red;
  }

  *::-webkit-scrollbar {
    width: .9rem;
  }  
  *::-webkit-scrollbar-track {
    background: lightgrey;
    border-radius: 1.6rem;
    margin: .2rem 0;
  }  
  *::-webkit-scrollbar-thumb {
    background: ${theme.colors.accentOpacity};
    border: 3px solid lightgrey;
    border-radius: 1.6rem;
  }
  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    font-family: inherit;

    &:hover {
      opacity: .8;
    }
  }
  
  hr {
    margin: 0;
    border: 1px dashed rgba(145, 158, 171, 0.2);
    width: 100%;
  }
  
  button {
    cursor: pointer;
    border: none;
    background: transparent;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Roboto', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-size: 1.8rem;
    line-height: 1;
    color: ${theme.colors.text};
    overflow: hidden;
  }


  #root {
    height: 100vh;
  }

  main {
    height: 100%;
    max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    text-align: center;
    font-size: 3rem;

    position: relative;

    

    @media ${theme.media.mobile} {
      padding: .5rem;
    }
  }
`