import logo from '../../assets/images/rocket.svg'
import {TiHomeOutline, TiMessages, TiNews} from 'react-icons/ti';
import {S} from './styledAside'
import React from 'react';
import {GoPeople} from 'react-icons/go';

export const Aside = () => {
    return (
        <S.aside>
            <S.logoBox>
                <img src={logo} alt="logotip"/>
                <h1 style={{whiteSpace:'nowrap'}}><span>i</span>ncubator</h1>
            </S.logoBox>
            <nav>
                <ul>
                    <li>
                        <a href="#"><TiHomeOutline/>Home</a>
                    </li>
                    <li>
                        <a href="#"><TiNews/>News feed</a>
                    </li>
                    <li>
                        <a href="#"><TiMessages/>Messages</a>
                    </li>
                    <li>
                        <a href="#"><GoPeople/>Members</a>
                    </li>
                </ul>
            </nav>
        </S.aside>
    )
}