import React from 'react';
import styled from 'styled-components';
import {theme} from '../styles/theme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

type TextFieldPropsType = {
    placeholder: string
}
export const TextField: React.FC<TextFieldPropsType> = (props) => {
    return (
        <InputBox>
            <input placeholder={props.placeholder}/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </InputBox>
    )
}

export const InputBox = styled.div`
    position: relative;
    flex-grow: 1;
    max-width: 300px;
    margin: .5rem 0;

    & input {
        width: 100%;
        outline: none;
        padding: .5rem 3.2rem 0.5rem 1.3rem;
        background-color: ${theme.colors.lightingColor};
        color: ${theme.colors.text};
        line-height: 1.2rem;
        font-size: 1.6rem;
        font-family: inherit;
        border-radius: 1.6rem;
        border: 1px solid rgba(145, 158, 171, 0.2);
    }

    & button {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        font-size: 2rem;
        color: ${theme.colors.text};

        &:hover, &:focus-visible {
            color: black;
        }
    }
`