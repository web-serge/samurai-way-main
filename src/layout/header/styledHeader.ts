import styled from 'styled-components';
import {theme} from '../../styles/theme';
import {jump} from '../../styles/animations';
import {InputBox} from '../../components/Input';

const Header = styled.header `
  background-color: ${theme.colors.primary_bg};
  width: 100%;
  min-height: ${theme.size.headerHeight}rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: white;
  flex-wrap: wrap;
  padding: .5rem 1rem;
  
  & input {
    max-width: 50%;
    
    @media ${theme.media.mobile} {
      max-width: 100%;
    }
  }
  
  & ${InputBox} {
    text-align: center;
  }

  @media ${theme.media.mobile} {
    padding:.5rem;
    justify-content: center;
    gap: 1rem;
  }
`

const logoBox = styled.a `
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  height: ${theme.size.headerHeight}rem;
  text-transform: uppercase;
  background: ${theme.colors.primary_bg};
  align-self: flex-start;
  
  & img {
    width: 4rem;
    padding: .5rem;
  }
  
  & h1 {
    font-size: 2.5rem;
    display: inline-block;
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
`
export const S = {
    Header,
    logoBox
}