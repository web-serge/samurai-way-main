import styled from 'styled-components';
import {theme} from '../../styles/theme';

const aside = styled.aside`
    position: fixed;
    width: ${theme.size.asideWidth}rem;
    height: 100%;
    top: 5rem;
    left: 0;
    bottom: 0;
    z-index: 99;
    background: ${theme.colors.primary_bg};
    background: ${theme.colors.accentOpacity};
    overflow: hidden;
    transition: all 1s;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //border-right: 2px solid crimson;

    & nav {
        width: 100%;

        & li {
            width: 100%;
            //padding-left: 10px;
        }
    }

    & ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 1.7rem;
        text-transform: capitalize;
        //padding: 1rem 0;
        width: 100%;

        & a {
            padding: 20px;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: flex-end;
            gap: 2rem;
            transition: .3s;
            font-size: 2rem;
            width: 100%;
            transition: .3s;
            color: ${theme.colors.primary_bg};
            font-weight: bold;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, 0.3);
                width: 0;
                transition: .3s;
            }
            &:hover:before {
                width: 100%;
                left: 0;
            }

            &.active {
                color: ${theme.colors.accent};
                background: white;
            }

            &:hover {
                opacity: .8;
            }
        }
    }

    @media ${theme.media.mobile} {
        width: 0;
        padding: 0;
        opacity: 0;
    }
`
export const S = {
    aside,
}