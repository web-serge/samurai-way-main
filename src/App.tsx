import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import {Aside} from './layout/aside/Aside';
import {Header} from './layout/header/Header';
import {Profile} from './layout/profile/Profile';
import {Dialogs} from './layout/messeges/Dialogs';
import {Members} from './layout/members/Members';
import News from './layout/news/News';
import {ActionType, StateType, StoreType} from './store';

type AppType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

function App({state, dispatch}: AppType) {
    let [isAside, setIsAside] = useState<boolean>(true)

    function toggleMenu() {
        setIsAside(!isAside)
    }

    return (
        <>
            <Header menu={isAside} toogleMenu={toggleMenu}/>
            <main>
                {isAside && <Aside asideItem={state.aside}/>}
                <Route exact path={'/'} render={() => <Profile posts={state.profilePage.posts}
                                                               dispatch={dispatch}
                                                               text={state.profilePage._text}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs usersList={state.membersPage.usersList} messages={state.messagesPage}/>}/>
                <Route path={'/members'} render={() => <Members usersList={state.membersPage.usersList}/>}/>
            </main>
        </>
    );
}

export default App;