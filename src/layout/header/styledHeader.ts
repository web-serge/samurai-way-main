import styled from 'styled-components';
import {theme} from '../../styles/theme';
import {jump} from '../../styles/animations';
import {InputBox, TextField} from '../../components/Input';
import {Container} from '../../components/Container';

const Header = styled.header`
  background-color: ${theme.colors.primary_bg};
  width: 100%;
  height: ${theme.size.headerHeight}rem;

  color: white;
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;

  & i:last-child {
    display: block;
    font-size: 2rem;
    
    @media ${theme.media.mobile} {
      display: block;
    }
  }
  
  & ${InputBox} {
    max-width: 80%;

    @media ${theme.media.mobile} {
      display: none;
    }
  }

  @media ${theme.media.mobile} {
    & small {
      display: none;
    }
  }
`

const logoBox = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  background: transparent;
  align-self: flex-start;

  & img {
    width: 4rem;
    margin-right: 1rem;
  }

  & h1 {
    font-size: 2.5rem;
    display: inline-block;
  }

  & span {
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