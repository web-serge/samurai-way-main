import {S} from './styledAside'
import React from 'react';
import {AsideLink, AsideLinkPropsType} from './aside-link/AsideLink';

export const Aside = () => {
    const asideItem: Array<AsideLinkPropsType> = [
        {name: 'Profile', href: '/profile', icon: "fa-duotone fa-house-chimney-user fa-xl"},
        {name: 'Dialogs', href: '/dialogs', icon: "fa-duotone fa-messages fa-xl"},
        {name: 'Members', href: '/members', icon: "fa-duotone fa-people-carry-box fa-xl"},
    ]
    const AsideLinks = asideItem.map((item, idx) =>
        <AsideLink key={idx} {...item} />)

    return (
        <S.aside>
            <nav>
                <ul>
                    {AsideLinks}
                </ul>
            </nav>
        </S.aside>
    )
}