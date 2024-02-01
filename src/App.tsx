import React from 'react';
import {Header} from './layout/header/Header';
import {Aside} from './layout/aside/Aside';
import {Members, UserListType} from './layout/members/Members';
import {BrowserRouter, Route} from 'react-router-dom';
import {Dialogs} from './layout/messeges/Dialogs';
import {Profile} from './layout/profile/Profile';

function App() {
    const usersList: Array<UserListType> = [
        {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        }, {
            imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
            name: 'User Name',
            lastOnline: `${Math.ceil(Math.random() * 29)} days ago`
        },
    ]

    return (
        <BrowserRouter>
            <Aside/>
            <Header/>
            <main>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs usersList={usersList}/>}/>
                <Route path={'/members'} render={() => <Members usersList={usersList}/>}/>
            </main>
        </BrowserRouter>
    );
}

export default App;