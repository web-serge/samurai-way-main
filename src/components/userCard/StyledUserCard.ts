import styled from 'styled-components';
import {theme} from '../../styles/theme';

const card = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.primary_bg};
  padding: .5rem;
  font-size: 1.7rem;
  border-radius: 5px;
  overflow: hidden;
  gap: 1rem;

  & img {
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1/1;
    border: 3px solid rgba(156, 229, 241, 0.87);
  }
`


export const S = {
    card
}