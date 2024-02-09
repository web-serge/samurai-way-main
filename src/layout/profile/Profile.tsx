import {Container} from '../../components/Container';
import styled from 'styled-components';
import {theme} from '../../styles/theme';
import {faAddressCard, faHeart} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Textarea} from '../../components/Textarea';
import {Post} from '../../components/Post';
import s from './style.module.css';

export const Profile = () => {
    return (
        <Container as={'section'} style={{overflowY: 'scroll'}}>
            <ProfileBanner>
                <ProfileUserInfo>
                    <img src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_7.jpg" alt="avatar"/>
                    <h5>Your Name</h5>
                </ProfileUserInfo>
                <ProfileTabs>
                    <li>
                        <a href="" className={s.bannerIcon}>
                            <FontAwesomeIcon icon={faAddressCard}/> Profile
                        </a>
                    </li>
                    <li>
                        <a href="" className={s.bannerIcon}>
                            <i className="fa-duotone fa-heart"></i> Followers
                        </a>
                    </li>
                    <li>
                        <a href="" className={s.bannerIcon}>
                            <i className="fa-duotone fa-person-falling-burst"></i> Friends
                        </a>
                    </li>
                </ProfileTabs>
            </ProfileBanner>
            <Textarea/>
            <PostsContainer>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </PostsContainer>
        </Container>
    )
}

const ProfileBanner = styled.div`
    width: 100%;
    height: calc(28% - ${theme.size.headerHeight}rem);
    background-image: linear-gradient(rgba(0, 75, 80, 0.8), rgba(0, 75, 80, 0.8)), url("https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 1.6rem;
    overflow: hidden;
    position: relative;
    box-shadow: ${theme.colors.shadow};
    margin-bottom: 2rem;
`

const ProfileUserInfo = styled.div`
    position: absolute;
    bottom: 2.5rem;
    left: 2.5rem;
    z-index: 5;
    display: flex;
    align-items: center;
    color: white;
    gap: 1.5rem;
    white-space: nowrap;

    @media ${theme.media.mobile} {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        & img {
            width: 10rem;
        }
    }

    & img {
        border-radius: 50%;
        border: 3px solid white;
    }
`
const ProfileTabs = styled.ul`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    background: white;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 2rem;
    gap: 2rem;
    white-space: nowrap;

    @media ${theme.media.mobile} {
        justify-content: center;
        font-size: 1.5rem;
    }
`
const PostsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    text-align: left;
    //height: 100%;
    width: 100%;
    margin: 1rem 0;
    border-radius: 1.6rem;
    padding: 1rem .5rem;
    //overflow-y: scroll;
    gap: 2rem;
`