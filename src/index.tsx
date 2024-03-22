import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import {GlobalStyles} from './styles/GlobalStyles';
import {BrowserRouter} from 'react-router-dom';
import {store, ReduxStoreType} from './redux/store';

function rerenderEntireTree(state: ReduxStoreType) {
    ReactDOM.render(
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <App store={state} dispatch={state.dispatch}/>
            </ThemeProvider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store)

console.log(store)

store.subscribe(() => {
    rerenderEntireTree(store)
})