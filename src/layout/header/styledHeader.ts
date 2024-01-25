import styled from 'styled-components';
import {theme} from '../../styles/theme';
import {Container} from '../../components/Container';

const Header = styled.header `
  background-color: ${theme.colors.primary_bg};
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  padding-left: ${theme.size.aside}rem;
  
  & ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  
  @media ${theme.media.mobile} {
    padding: 0 .5rem;
  }
`

const inputBox = styled.div `
  position: relative;
  max-width: 90%;
  flex-grow: 1;
  padding: 0 5px;
  line-height: 1;
  min-width: 12rem;
  
  & button {
    position: absolute;
    top: 50%;
    right: .6rem;
    transform: translateY(-50%);
    font-size: 3rem;
  }
  
  & input {
    width: 100%;
    border: none;
    outline: none;
    padding: 1rem 5px 1rem 1.9rem;
    border-radius: 5px;
    font-size: inherit;
    background-color: ${theme.colors.input_bg};
  }
`
export const S = {
    Header,
    inputBox,
}