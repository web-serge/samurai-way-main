import React from 'react';
import {ActionProfileType, addPostAC, ProfilePageType, updateTextAC} from '../../redux/profile-reducer';
import {Profile} from './Profile';
import {ReduxStoreType} from '../../redux/store';

type ProfileContainerType = {
    store: ReduxStoreType
}
export const ProfileContainer = (props: ProfileContainerType) => {
    const {dispatch, getState} = props.store

    function onUpdateText(text: string) {
        dispatch(updateTextAC(text))
    }

    function onAddPost() {
        dispatch(addPostAC())
    }

    return <Profile posts={getState().profilePage.posts}
                    text={getState().profilePage._text}
                    updateText={onUpdateText}
                    addPost={onAddPost}/>
}