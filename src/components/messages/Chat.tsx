import React from 'react'
import Message from './messages-item/Message';
import FriendMessage from './friend-message/FriendMessage';
import MessageSender from './message-sender/MessageSender';
import './chat.css'
import {MessagesType} from '../../redux/messages-reducer';

type UserType = {
    avatar: string
    name: string
}
type MessageItemType = {
    text: string
    time: string
}

export type MessageType = {
    id: number
    user: UserType
    message: MessageItemType
}

export const Chat = (props: { messages: MessagesType[] }) => {
    return (
        <>
            <div className='box'>
                <Message message={props.messages[1]}/>
                <FriendMessage message={props.messages[0]}/>
                <MessageSender myMessage={props.messages[1]}/>
            </div>
        </>
    )
}
