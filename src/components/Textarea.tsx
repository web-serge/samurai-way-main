import styled from 'styled-components';
import {theme} from '../styles/theme';
import {Button} from './Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const TextContainer = styled.form`
  background: ${theme.colors.lightingColor};
  width: 100%;
  padding: 2.5rem;
  text-align: right;
  box-shadow: rgba(145, 158, 171, 0.2) 0 0 2px 0, rgba(145, 158, 171, 0.12) 0 12px 24px -4px;
  border-bottom-right-radius: 1.6rem;
  border-bottom-left-radius: 1.6rem;
  overflow: hidden;
  max-height: 18%;

  & textarea {
    width: 100%;
    max-height: 7rem;
    resize: none;
    padding: 1.6rem;
    border-radius: ${theme.size.radius}rem;
    border: 1px solid rgba(145, 158, 171, 0.2);
    
    &:focus-visible {
      outline: 1px solid greenyellow;
    }
  }
`

export const Textarea = () => {
    return (
        <TextContainer>
            <textarea placeholder={'Write your message...'}/>
            <Button type={'submit'}>Send <FontAwesomeIcon icon={faPaperPlane}/></Button>
        </TextContainer>
    )
}