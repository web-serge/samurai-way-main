import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import {GlobalStyles} from './styles/GlobalStyles';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);