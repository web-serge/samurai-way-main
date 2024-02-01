import React, {useState} from 'react';
import styled from 'styled-components';
import {theme} from '../styles/theme';
import {Textarea} from './Textarea';
import {Button} from './Button';

export const Post = () => {

    let [count, setCount] = useState(0)
    function onLikeHandler() {
        count > 0 ? setCount(--count) : setCount(++count)
    }

    return (
        <SPost>
            <img
                src={`https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_${Math.ceil(Math.random()*16)}.jpg`}
                alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laboriosam mollitia nemo neque quae! Autem culpa dolor dolorem error, exercitationem facere, nesciunt non optio perspiciatis quam totam unde voluptas? Harum necessitatibus quas quia soluta. Ad amet aperiam corporis ea, necessitatibus nesciunt nisi placeat qui quia similique tenetur, vel veritatis voluptas! Aliquam blanditiis nobis quam.</p>
            <div>
                <div>
                    <button onClick={onLikeHandler} className={count > 0 ? 'green' : ''}><i className="fa-duotone fa-thumbs-up"></i></button> <small>{count}</small>
                </div>
                <div>
                    <button><i className="fa-duotone fa-comment-lines"></i></button>
                    <button><i className="fa-duotone fa-share-nodes"></i></button>
                </div>
            </div>
        </SPost>
    );
};

const SPost = styled.li`
    box-shadow: ${theme.colors.shadow};
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 -1rem;
    margin: 0 -.3rem;
    
    & small {
        font-size: 1.2rem;
    }

    & img {
        aspect-ratio: 2/1;
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 1.6rem;
        margin-bottom: .5rem;
        
        @media screen and (max-width: 420px) {
            aspect-ratio: 4/3;
        }
    }

    & p {
        text-indent: 1rem;
        margin: 1.5rem 0;
        font-size: 1.6rem;
        line-height: 1.2;
        padding: 0 1rem;
    }

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem 1rem 1rem;

        & button {
            position: relative;
            font-size: 2rem;
            padding: .55em;
            
            &.green {
                color: ${theme.colors.accent}
            }
            
            &::after {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                display: block;
                background-color: rgba(128, 128, 128, 0.35);
                padding: .85em;
                border-radius: 50%;
                z-index: -1;
                opacity: 0;
                visibility: hidden;
                transition: 0.3s;
                pointer-events: none;
            }

            &:hover:after {
                opacity: 1;
                visibility: visible;
            }
        }

        & button + button {
            margin-left: 2.5rem;
        }
    }

    & + li {
        margin-bottom: 2rem;
    }
`