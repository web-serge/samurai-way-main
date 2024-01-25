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

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    line-height: 0;
    font-size: inherit;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Roboto', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;;
    font-size: 1.8rem;
    line-height: 1;
    height: calc(100vh - 7rem);
    overflow: hidden;
  }


  #root {
    height: 100%;
  }

  main {
    height: 100%;
    background-color: ${theme.colors.input_bg};
    overflow-y: auto;
    background: ${theme.colors.secondary_bg};
    padding: 1rem 0 1rem calc(${theme.size.aside}rem + 5px);

    text-align: center;
    font-size: 3rem;
    color: cadetblue;

    @media ${theme.media.mobile} {
      padding:.5rem;
    }
  }
`