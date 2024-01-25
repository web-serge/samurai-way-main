import styled from 'styled-components';
import {theme} from '../../styles/theme';
import {jump} from '../../styles/animations';

const aside = styled.aside `
  position: fixed;
  width: ${theme.size.aside}rem;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 99;
  background: ${theme.colors.primary_bg};
  padding-left: 1rem;
  overflow: hidden;
  transition: all 1s;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid ${theme.colors.secondary_bg};
  
  & ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    font-size: 1.7rem;
    text-transform: capitalize;
    
    & a {
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: 3ms;
    }
  }
  
  & span{
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      display: inline-block;
      border-radius: 50%;
      width: .5rem;
      height: .5rem;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background: indianred;
      animation: ${jump} 2s infinite;
    }

    &:after {
      content: 'community';
      position: absolute;
      font-size: .7rem;
      top: 100%;
      left: 0;
    }
  }
  
  @media ${theme.media.mobile} {
    width: 0;
    padding: 0;
    opacity: 0;
  }
`

const logoBox = styled.a `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 7rem;
  text-transform: uppercase;
  margin-bottom: 7rem;
  width: 100%;
  
  & img {
    width: 5rem;
    margin-right: 1rem;
  }
  
  & h1 {
    font-size: 2.5rem;
  }
`

export const S = {
    aside,
    logoBox
}