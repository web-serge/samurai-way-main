import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/theme';
type NewsItemType = {
    title: string
    // author: string
    description: string
    url: string
    urlToImage: string
}
export const NewsItem = (props: NewsItemType) => {

    return (
        <SNewsItem>
            <h5>{props.title} </h5>
            <div>
                {props.urlToImage !== '' && <img src={props.urlToImage} alt="image"/>}
                <p>{props.description}</p>
            </div>
            <a href={props.url}>Подробнее <i className="fa-duotone fa-arrow-right"></i></a>
        </SNewsItem>
    );
};

const SNewsItem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    border-bottom: 1px solid lightgrey;
    text-align: start;
    background: #66caa830;
    padding: 5px;
    border-radius: 10px;
    margin: 20px 5px;
    
    & p {
        font-size: 20px;
    }
    
    & img {
        align-self: center;
        max-width: 300px;
        width: 100%;
        aspect-ratio: 2/1;
        object-fit: cover;

        @media ${theme.media.mobile} {
            max-width: 100%;
            
        }
    }
    & div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 30px;
        
        @media ${theme.media.mobile} {
            flex-direction: column;
        }
    }
    a {
        align-self: flex-end;
        font-size: 15px;
        
        & i {
            transition: .4s;
        }
        
        &:hover i {
            transform: translateX(10px);
        }
    }
`