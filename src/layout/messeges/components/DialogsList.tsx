import {Flex} from '../../../components/Flex';
import React from 'react';
import styled from 'styled-components';
import {theme} from '../../../styles/theme';
import {Link} from 'react-router-dom';
import {UserListType} from '../../../redux/members-reducer';

type DialogsListPropsType = {
    usersList: Array<UserListType>
}
export const DialogsList = (props: DialogsListPropsType) => {
    const users = props.usersList.map((user, idx) => {
        let path = `/dialogs/${user.id}`
        return (
            <li key={user.id}>
                <Link to={path}>
                    <img src={user.imgUrl} alt="photo user"/>
                    <div style={{textAlign:'left'}}>
                        <h6>{user.name}</h6>
                        <small style={{fontSize:'10px'}}>last message</small>
                    </div>
                </Link>
            </li>
        )
    })
    return (
        <DialogsListContainer>
            <Flex as={'ul'} gap={1.5} direction={'column'} align={'flex-start'} justify={'flex-start'}>
                {users}
            </Flex>
        </DialogsListContainer>
    )
}

const DialogsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${theme.colors.lightingColor};
    box-shadow: ${theme.colors.shadow};
    border-radius: 1.6rem;
    height: 100%;
    overflow-y: auto;

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
        padding: 5px;
        display: flex;
        align-items: flex-start;
        gap:5px;
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
   
        padding: 5px;
    }

    & li {
    }
`
