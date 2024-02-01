import {S} from './styledAside'
import React from 'react';
import {icon, library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconName} from '@fortawesome/fontawesome-common-types';
import {NavLink} from 'react-router-dom';
import {Header} from '../header/Header';

library.add(fas)

type FontAwesomeType = {
    IconName: IconName
    value: string
    href: string
    class: string
}
export const Aside: React.FC = () => {
    const asideItem: Array<FontAwesomeType> = [
        {IconName: 'home', value: 'Profile', href: '/profile', class: "fa-duotone fa-house-chimney-user fa-xl"},
        {IconName: 'envelope', value: 'Dialogs', href: '/dialogs', class: "fa-duotone fa-messages fa-xl"},
        {IconName: 'user-group', value: 'Members', href: '/members', class: "fa-duotone fa-people-carry-box fa-xl"},
    ]

    return (
        <S.aside>
            <nav>
                <ul>
                    {asideItem.map(item => {
                        return (
                            <li key={item.value}>
                                <NavLink to={item.href}>
                                    {/*<FontAwesomeIcon icon={icon({iconName: item.IconName, prefix: 'fas'})}/>*/}
                                    <span>{item.value}</span>
                                    <i className={item.class}></i>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </S.aside>
    )
}