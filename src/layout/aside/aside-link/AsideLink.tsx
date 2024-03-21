import {NavLink} from 'react-router-dom';
import React from 'react';
import {AsideLinkType} from '../../../store';

export const AsideLink = ({href, name, icon}: AsideLinkType) => {
    return (
        <li>
            <NavLink to={href}>
                <span>{name}</span>
                <i className={icon}></i>
            </NavLink>
        </li>
    )
}