import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {Flex} from '../../../components/Flex';
import React from 'react';
import {theme} from '../../../styles/theme';
import styled from 'styled-components';
import {Textarea} from '../../../components/Textarea';

export const DialogsMessages = () => {
    return (
            <MessagesContainer>
                <MessagesHeader>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19fzR2q-wexkMHHnQONCmgZlgF0kvG3wuvQ&usqp=CAU"
                        alt="current user chat"/>
                    <h6>Current User Name <FontAwesomeIcon icon={faPhone}/></h6>
                </MessagesHeader>
                <hr/>
                <Flex as={'ul'} align={'flex-end'} direction={'column'} justify={'flex-start'} gap={1}>
                    <ItemMessage>Lorem </ItemMessage>
                    <ItemMessage>message2</ItemMessage>
                    <ItemMessage>message3 </ItemMessage>
                    <ItemMessage>message3 </ItemMessage>
                    <ItemMessage>message3 </ItemMessage>
                    <ItemMessage>message3 </ItemMessage>
                </Flex>
                <hr/>
                <Textarea />
            </MessagesContainer>
    )
}

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  height: 100%;

  @media ${theme.media.mobile} {
    height: 68%;
  }
  
  & hr {
    border-style: solid;
    width: 100%;
    display: inline-block;
  }
  
  & ul {
    background: ${theme.colors.lightingColor};
    box-shadow: ${theme.colors.shadow};
    padding: 2rem;
    height: 100%;
    overflow-y: auto;
  } 
`
const MessagesHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  background: ${theme.colors.lightingColor};
  box-shadow: ${theme.colors.shadow};
  padding: 1rem;
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;

  & img {
    border-radius: 50%;
    width: 5rem;
    object-fit: cover;
    aspect-ratio: 1/1;
  }

  & svg {
    color: #35b430;
    font-size: 2rem;
  }
`
const ItemMessage = styled.li`
  font-size: 1.6rem;
  padding: 1.4rem 2.8rem;
  border-radius: 1em;
  position: relative;
  line-height: 1.5em;
  margin-right: 1rem;
  margin-bottom: 1rem;
  box-shadow: ${theme.colors.shadow};
`