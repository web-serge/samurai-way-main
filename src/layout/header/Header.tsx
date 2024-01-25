import {S} from './styledHeader'
import React from 'react';
import {IoIosSearch} from 'react-icons/io';
import {Container} from '../../components/Container';
import {GrLanguage} from 'react-icons/gr';
import {Flex} from '../../components/Flex';
import {FaUserCircle} from 'react-icons/fa';

export const Header = () => {
    return (
        <S.Header>
            <Container>
                <S.inputBox>
                    <button><IoIosSearch/></button>
                    <input placeholder={'Search'}/>
                </S.inputBox>
                <Flex gap={1}>
                    <Flex gap={.5}>
                        <GrLanguage /> <span>EN</span>
                    </Flex>
                    <Flex gap={.5}>
                        <FaUserCircle />
                        <span style={{whiteSpace: 'nowrap'}}>HI, USER</span>
                    </Flex>
                </Flex>
            </Container>
        </S.Header>
    )
}
