import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {NewsItem} from './NewsItem';
import styled from 'styled-components';

const News = () => {
    const [article, setArticle] = useState([])
    const api_key = '2128f881257c44a9a882bfe69c1eb934'
    useEffect(() => {
        const getArticles = async () => {
            const response = axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${api_key}`)
            console.log(response)
            setArticle((await response).data.articles)
        }
        getArticles()
    }, []);
    console.log(article)

    const allNews = article.map((el, idx) => <NewsItem key={idx} {...el} />)
    return (
        <NewsContainer>
            {allNews}
        </NewsContainer>
    );
};

export default News;

const NewsContainer = styled.section `
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    overflow-y: auto;
    height: 100%;
`