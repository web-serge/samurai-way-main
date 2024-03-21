import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import {GlobalStyles} from './styles/GlobalStyles';
import {BrowserRouter} from 'react-router-dom';
import {StateType, store, StoreType} from './store';


function rerenderEntireTree (state: StateType) {
    ReactDOM.render(
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </ThemeProvider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
