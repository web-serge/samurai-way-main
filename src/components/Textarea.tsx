import styled from 'styled-components';
import {theme} from '../styles/theme';
import {Button} from './button/Button';
import React, {ChangeEvent} from 'react';

const TextContainer = styled.form`
    background: ${theme.colors.lightingColor};
    width: 100%;
    padding: 16px;
    box-shadow: rgba(145, 158, 171, 0.2) 0 0 2px 0, rgba(145, 158, 171, 0.12) 0 12px 24px -4px;
    border-radius: 16px;
    text-align: end;

    & textarea {
        width: 100%;
        resize: none;
        padding: 1.6rem;
        border-radius: ${theme.size.radius}rem;
        border: 1px solid rgba(145, 158, 171, 0.2);
        letter-spacing: 1px;

        &:focus-visible {
            outline: 2px solid ${theme.colors.accent};
        }
    }
`

export const Textarea = (props: { onClick: () => void, value: string, onChange: (text: string) => void }) => {
    //const textareaRef = React.createRef<HTMLTextAreaElement>()

    function onClickHandler() {
        // if (textareaRef.current) {
        // props.onClick(textareaRef.current.value)
        //     textareaRef.current.value = ''
        // }
        props.onClick()
    }

    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        props.onChange(e.currentTarget.value)
    }

    return (
        <TextContainer>
            <textarea placeholder={'Write your message...'}
                //ref={textareaRef}
                      onChange={onChangeHandler}
                      value={props.value}/>
            <Button name='Send &#9993;' onClick={onClickHandler}/>
        </TextContainer>
    )
}