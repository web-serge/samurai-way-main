import {NavLink} from 'react-router-dom';
import React from 'react';

export type AsideLinkPropsType = {
    href: string
    name: string
    icon: string
}
export const AsideLink = ({href, name, icon}: AsideLinkPropsType) => {
    return (
        <li>
            <NavLink to={href}>
                <span>{name}</span>
                <i className={icon}></i>
            </NavLink>
        </li>
    )
}