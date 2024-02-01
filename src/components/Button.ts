import styled from 'styled-components';
import {theme} from '../styles/theme';

export const Button = styled.button `
    background: ${theme.colors.accent};
  padding: .5em 1em;
  color: ${theme.colors.lightingColor};
  border-radius: 10px;
  font-size: 1.6rem;
  transition: all .3s;
  outline: none;

  & svg {
    transition: .3s;
    margin-left: .5rem;
  }

  &:hover, &:focus-visible {
      color: white;
      box-shadow: 3px 3px 7px ${theme.colors.accent};
  }

  &:active svg {
    transform: translateX(8px);
  }
`