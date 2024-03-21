import {Container} from '../../components/Container';
import {Flex} from '../../components/Flex';
import React from 'react';
import {DialogsList} from './components/DialogsList';
import {Chat} from '../../components/messages/Chat';
import {MessagesType, UserListType} from '../../store';

type MessagesPropsType = {
    usersList: Array<UserListType>
    messages: MessagesType[]
}
export const Dialogs: React.FC<MessagesPropsType> = (props) => {
    return (
        <Container as={'section'} style={{height:'95%', display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <Flex align={'flex-start'} gap={1} height='60%'>
                <DialogsList usersList={props.usersList}/>
                <Chat messages={props.messages}/>
            </Flex>
        </Container>
    );
}