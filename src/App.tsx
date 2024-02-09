import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import {Aside} from './layout/aside/Aside';
import {Header} from './layout/header/Header';
import {Profile} from './layout/profile/Profile';
import {Dialogs} from './layout/messeges/Dialogs';
import {Members, UserListType} from './layout/members/Members';

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
    let [menu, setMenu] = useState<boolean>(true)

    function toggleMenu() {
        setMenu(!menu)
    }

    return (
        <>
            {menu && <Aside/>}
            <Header menu={menu} toogleMenu={toggleMenu}/>
            <main>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs usersList={usersList}/>}/>
                <Route path={'/members'} render={() => <Members usersList={usersList}/>}/>
            </main>
        </>
    );
}

export default App;