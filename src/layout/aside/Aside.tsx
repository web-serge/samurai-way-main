import {S} from './styledAside'
import React from 'react';
import {AsideLink} from './aside-link/AsideLink';
import {AsideLinkType} from '../../store';


export const Aside = (props: {asideItem: AsideLinkType[]}) => {

    const AsideLinks = props.asideItem
        .map((item, idx) =>
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