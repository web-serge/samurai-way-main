import {TextField} from '../../../components/Input';
import {Flex} from '../../../components/Flex';
import React from 'react';
import styled from 'styled-components';
import {theme} from '../../../styles/theme';
import {UserListType} from '../../members/Members';

type DialogsListPropsType = {
    usersList: Array<UserListType>
}
export const DialogsList = (props: DialogsListPropsType) => {
    return (
            <DialogsListContainer>
                    <TextField placeholder={'Search chat'}/>
                <hr/>
                <Flex as={'ul'} gap={1.5} direction={'column'} align={'flex-start'} justify={'flex-start'}>
                    {props.usersList.map(user => {
                        return (
                            <li key={Math.random()}>
                                <a href="#">
                                    <img src={user.imgUrl} alt="photo user"/>
                                    <h6>{user.name}</h6>
                                </a>
                            </li>
                        )
                    })}
                </Flex>
            </DialogsListContainer>
    )
}

const DialogsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  background: ${theme.colors.lightingColor};
  box-shadow: ${theme.colors.shadow};
  border-radius: 1.6rem;
  height: 100%;

  & input {
    width: 100%;
    margin: 1.25rem 0;
  }
  
  @media ${theme.media.mobile} {
    height: 40%;
  }
  
  & hr {
    border-style: solid;
  }
  & a {
    background: white;
    border-radius: 5px;
    padding: .5rem 1rem;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    white-space: nowrap;
    box-shadow: ${theme.colors.shadow};
  }

  & img {
    border-radius: 50%;
    width: 5rem;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
  
  & ul {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 10px;
  }
  
  & li {
    width: 100%;
    padding: 0 10px;
  }
`
