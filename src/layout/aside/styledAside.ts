import styled from 'styled-components';
import {theme} from '../../styles/theme';

const aside = styled.aside `
  position: fixed;
  width: ${theme.size.asideWidth}rem;
  height: 100%;
  top: 6rem;
  left: 0;
  bottom: 0;
  z-index: 99;
  background: ${theme.colors.primary_bg};
  background: white;
  padding-left: 1rem;
  overflow: hidden;
  transition: all 1s;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 2px solid crimson;
  
  & ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    font-size: 1.7rem;
    text-transform: capitalize;
    padding: 10rem 0 0;
    
    & a {
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: .3s;
      font-size: 2rem;
      
      &.active {
        color: ${theme.colors.accent};
      }
      
      &:hover {
        opacity: .8;
      }
    }
  }
  
  @media ${theme.media.mobile} {
    width: 0;
    padding: 0;
    opacity: 0;
  }
`
export const S = {
    aside,
}