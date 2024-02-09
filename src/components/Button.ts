import styled from 'styled-components';
import {theme} from '../styles/theme';

export const Button = styled.button`
    background: ${theme.colors.accent};
    padding: .5em 1em;
    color: ${theme.colors.lightingColor};
    border-radius: 10px;
    font-size: 1.6rem;
    transition: all .3s;
    outline: none;

    & svg {
        transition: .3s;
        margin-left: .5rem;
    }

    &:hover, &:focus-visible {
        box-shadow: 5px 3px 1px lightgrey;
    }

    &:active svg {
        transform: translateX(8px);
    }
`