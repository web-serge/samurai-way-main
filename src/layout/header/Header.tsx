import {S} from './styledHeader'
import React from 'react';
import {Flex} from '../../components/Flex';
import {TextField} from '../../components/Input';
import logo from '../../assets/images/rocket.svg';

export const Header = (props: {menu: boolean, toogleMenu: () => void}) => {
    function onClickButtonHandler () {
        props.toogleMenu()
    }



    return (
        <S.Header>
                <S.logoBox>
                    <img src={logo} alt="logotip"/>
                    <h1 style={{whiteSpace: 'nowrap'}}><span>i</span>ncubator</h1>
                </S.logoBox>
                    <TextField placeholder={'Search people, pages, groups...'}/>
                    <Flex gap={1}>
                        <Flex gap={.5}>
                            <i className="fa-duotone fa-globe"></i>
                            <small>EN</small>
                        </Flex>
                        <Flex gap={.5}>
                            <i className="fa-duotone fa-user-tie"></i>
                            <small style={{whiteSpace: 'nowrap'}}>HI, USER</small>
                        </Flex>
                        {!props.menu && <button onClick={onClickButtonHandler}><i className="fa-duotone fa-bars"></i></button>}
                        {props.menu && <button onClick={onClickButtonHandler}><i className="fa-duotone fa-xmark"></i></button>}
                    </Flex>
        </S.Header>
    )
}