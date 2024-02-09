import styled from 'styled-components';
import {theme} from '../styles/theme';

export const Container = styled.div `
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
    padding: 5px 5px 5px ${theme.size.asideWidth}rem;
    
    @media ${theme.media.mobile} {
        padding-left: 5px;
    }
`