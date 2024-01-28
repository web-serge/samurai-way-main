import {S} from './styledHeader'
import React from 'react';
import {GrLanguage} from 'react-icons/gr';
import {Flex} from '../../components/Flex';
import {FaUserCircle} from 'react-icons/fa';
import {TextField} from '../../components/Input';
import logo from '../../assets/images/rocket.svg';

export const Header = () => {
    return (
        <S.Header>
                <S.logoBox>
                    <img src={logo} alt="logotip"/>
                    <h1 style={{whiteSpace: 'nowrap'}}><span>i</span>ncubator</h1>
                </S.logoBox>
                <TextField placeholder={'Search people, pages, groups...'}/>
                <Flex gap={1}>
                    <Flex gap={.5}>
                        <GrLanguage /> <span>EN</span>
                    </Flex>
                    <Flex gap={.5}>
                        <FaUserCircle />
                        <span style={{whiteSpace: 'nowrap'}}>HI, USER</span>
                    </Flex>
                </Flex>
        </S.Header>
    )
}
