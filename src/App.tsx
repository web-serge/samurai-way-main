import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import {Aside} from './layout/aside/Aside';
import {Header} from './layout/header/Header';
import {Profile} from './layout/profile/Profile';
import {Dialogs} from './layout/messeges/Dialogs';
import {Members} from './layout/members/Members';
import News from './layout/news/News';
import {ReduxStoreType} from './redux/store';
import {ProfileContainer} from './layout/profile/ProfileContainer';

type AppType = {
    store: ReduxStoreType
    dispatch: (action: any) => void
}

function App({store, dispatch}: AppType) {
    let [isAside, setIsAside] = useState<boolean>(true)

    function toggleMenu() {
        setIsAside(!isAside)
    }

    return (
        <>
            <Header menu={isAside} toogleMenu={toggleMenu}/>
            <main>
                {isAside && <Aside asideItem={store.getState().aside}/>}
                <Route exact path={'/'} render={() => <ProfileContainer store={store} />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs usersList={store.getState().membersPage} messages={store.getState().messagesPage}/>}/>
                <Route path={'/members'} render={() => <Members usersList={store.getState().membersPage}/>}/>
            </main>
        </>
    );
}

export default App;