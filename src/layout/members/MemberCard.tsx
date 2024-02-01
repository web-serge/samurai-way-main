import styled from 'styled-components';
import {theme} from '../../styles/theme';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneVolume, faUserPlus, faEnvelope} from '@fortawesome/free-solid-svg-icons';

type UserCardItemPropsType = {
    count: number
    imgUrl: string
    name: string
    lastOnline: string
}
export const MemberCard: React.FC<UserCardItemPropsType> = (props) => {
    return (
        <Card key={props.count}>
            <a href="#">
                <img
                src={props.imgUrl}
                alt="samurai"/>
                <h4>{`${props.name} ${props.count}`}</h4>
            </a>
            <small>{`Active ${props.lastOnline}`}</small>
            <ButtonBox >
                <button><i className="fa-duotone fa-user-plus"></i></button>
                <button><i className="fa-duotone fa-message-plus"></i></button>
                <button><i className="fa-duotone fa-phone-plus"></i></button>
            </ButtonBox>
            <hr/>
            <Statistics>
                <div>
                    <span>Follower</span>
                    <p><b>1.1k</b></p>
                </div>
                <div>
                    <span>Following</span>
                    <p><b>1.2k</b></p>
                </div>
                <div>
                    <span>Total Post</span>
                    <p><b>2.4k</b></p>
                </div>
            </Statistics>
        </Card>
    )
}

const Card = styled.li `
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.lightingColor};
  padding: .5rem;
  font-size: 1.7rem;
  border-radius: 1.6rem;
  overflow: hidden;
  gap: 1rem;
  box-shadow: rgba(145, 158, 171, 0.2) 0 0 2px 0, rgba(145, 158, 171, 0.12) 0 12px 24px -4px;
  height: min-content;
  transition: .3s;

  & img {
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1/1;
    border: 2px solid ${theme.colors.accent};
  }

  &:hover {
    background: rgba(0, 167, 111, .3);
  }

  & button {
    color: grey;

    &:hover {
      color: rgb(0, 167, 111);
      transform: scale(1.1);
    }
  }
`
const ButtonBox = styled.div `
  & button + button {
    margin: 1.5rem 0 1.5rem 2rem;
  }
`
const Statistics = styled.div `
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;
  color: rgb(99, 115, 129);
  padding: 2.5rem .5rem;
  
  & b {
    font-weight: 600;
    color: black;
  }
`