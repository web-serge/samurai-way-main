import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './MessageSender.module.css'
import Message from '../messages-item/Message';
import {Button} from '../../button/Button';
import {MessagesType} from '../../../redux/messages-reducer';

const MessageSender = (props: { myMessage: MessagesType }) => {
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    const addMessage = () => {
        const newMessage = {
            id: messages.length + 1,
            user: props.myMessage.user,
            message: {text, time: new Date().toTimeString().slice(0, 5)}
        }
        setMessages([...messages, newMessage])
        setText('')
    }

    const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }

    return (
        <>
            {messages.map((m) => (
                <Message key={'message' + m.id} message={m}/>
            ))}

            <div id={'hw1-send-message-form'} className={s.sendForm}>
                <textarea
                    id={'hw1-textarea'}
                    className={s.textarea}
                    title={'Shift+Enter for send'}
                    placeholder={'Type your message'}
                    value={text}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <Button name='Send'
                        onClick={addMessage}
                />
            </div>
        </>
    )
}

export default MessageSender
