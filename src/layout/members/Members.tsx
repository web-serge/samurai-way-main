import {MemberCard} from './MemberCard'
import {Flex} from '../../components/Flex';
import {TextField} from '../../components/Input';
import React from 'react';
import {faFilter} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Container} from '../../components/Container';
import {theme} from '../../styles/theme';
import {UserListType} from '../../store';



type MembersPropsType = {
    usersList: UserListType[]
}
export const Members = (props: MembersPropsType) => {
    let count: number = 0
    const members = props.usersList.map(user => {
        count++
        return (
            <MemberCard {...user}
                        count={count}
                        key={count}/>
        )
    })

    return (
        <Container as={'section'} style={{height: `calc(100% - ${theme.size.headerHeight}rem)`}}>
            <Flex gap={1} justify={'center'} wrap={'wrap'} style={{margin: '1rem 0'}}>
                <TextField placeholder={'Search'}/>
                <small style={{whiteSpace: 'nowrap'}}><FontAwesomeIcon icon={faFilter}/> Sort by</small>
                <select defaultValue={'age'}>
                    <option value="status">Online</option>
                    <option value="name">Name</option>
                    <option value="age">Age</option>
                </select>
            </Flex>
            <ul style={{
                    display: 'grid',
                    gridTemplateColumns: "repeat(auto-fit, minmax(22rem, 1fr))",
                    gap: '1rem',
                    height: '92%',
                    overflowY: 'scroll',
                    padding: '1rem .5rem'
                }}>
                {members}
            </ul>
        </Container>
    )
}