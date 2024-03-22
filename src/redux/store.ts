import {combineReducers, createStore, EmptyObject, Store} from 'redux';
import {ProfilePageType, ProfileReducer} from './profile-reducer';
import {AsideLinkType, navbarReducer} from './navbar-reducer';
import {messagesReducer, MessagesType} from './messages-reducer';
import {membersReducer, UserListType} from './members-reducer';

type StateReducersType = {
    profilePage: ProfilePageType;
    messagesPage: MessagesType[];
    membersPage: UserListType[];
    aside: AsideLinkType[];
}

export type ReduxStoreType = Store<EmptyObject & StateReducersType, any>

const reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: messagesReducer,
    membersPage: membersReducer,
    aside: navbarReducer
})
export const store: ReduxStoreType = createStore(reducers)