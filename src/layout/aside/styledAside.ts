import styled from 'styled-components';
import {theme} from '../../styles/theme';

const aside = styled.aside`
  position: fixed;
  width: ${theme.size.asideWidth}rem;
  height: 100%;
  top: 5rem;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: ${theme.colors.accentOpacity};
  overflow: hidden;
  transition: all .3s;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  & nav {
    width: 100%;

    & li {
      width: 100%;
    }
  }

  & ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.7rem;
    text-transform: capitalize;
    width: 100%;

    & a {
      padding: 20px;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: flex-end;
      gap: 2rem;
      transition: .3s;
      font-size: 2rem;
      width: 100%;
      color: white;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.3);
        width: 0;
        transition: .3s;
      }

      &:hover:before {
        width: 100%;
        left: 0;
      }

      &.active {
        color: ${theme.colors.accent};
        background: white;
      }

      &:hover {
       
      }
    }
  }
`
export const S = {
    aside,
}