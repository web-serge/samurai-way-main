import {S} from './styledAside'
import React from 'react';
import {icon, library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconName} from '@fortawesome/fontawesome-common-types';
import {NavLink} from 'react-router-dom';

library.add(fas)

type FontAwesomeType = {
    IconName: IconName
    value: string
    href: string
}
export const Aside: React.FC = () => {
    const asideItem: Array<FontAwesomeType> = [
        {IconName: 'home', value: 'Profile', href: '/profile'},
        {IconName: 'envelope', value: 'Dialogs', href: '/dialogs'},
        {IconName: 'user-group', value: 'Members', href: '/members'},
    ]

    return (
        <S.aside>
            <nav>
                <ul>
                    {asideItem.map(item => {
                        return (
                            <li key={item.value}>
                                <NavLink to={item.href}>
                                    <FontAwesomeIcon icon={icon({iconName: item.IconName, prefix: 'fas'})}/>
                                    {item.value}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </S.aside>
    )
}