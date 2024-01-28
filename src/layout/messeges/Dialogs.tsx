import {Container} from '../../components/Container';
import {Flex} from '../../components/Flex';
import {UserListType} from '../members/Members';
import React from 'react';
import {DialogsList} from './components/DialogsList';
import {DialogsMessages} from './components/DialogsMessages';

type MessagesPropsType = {
    usersList: Array<UserListType>
}
export const Dialogs: React.FC<MessagesPropsType> = (props) => {
    return (
        <Container as={'section'} style={{height:'85%'}}>
            <Flex align={'flex-start'} gap={1} wrap={'wrap'} height={'100%'}>
                <DialogsList usersList={props.usersList}/>
                <DialogsMessages/>
            </Flex>
        </Container>
    );
}