export let a = 1
/*
import {ActionProfileType, ProfileReducer} from './redux/profile-reducer';
import {ReduxStoreType} from './index';

export type PostType = {
    id: number
    imgUrl: string | null
    description: string
    likeCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    _text: string
}
export type MessageType = {
    id: number
    message: string
}
export type UserListType = {
    imgUrl: string
    name: string
    lastOnline: string
    id: number
    messages: MessageType[]
}
export type MessagesType = {
    id: number,
    user: {
        avatar: string
        name: string
    },
    message: {
        text: string
        time: string
    },
}


export type StateType = {
    membersPage: { usersList: UserListType[] }
    messagesPage: MessagesType[],
    profilePage: ProfilePageType,
    aside: AsideLinkType[]
}
export type StoreType = {
    _state: StateType
    onChange: (state: StateType) => void
    subscribe: (callback: (state: ReduxStoreType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}
export type AsideLinkType = {
    href: string
    name: string
    icon: string
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_${Math.ceil(Math.random() * 16)}.jpg`,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laboriosam mollitia nemo neque quae! Autem culpa dolor dolorem error, exercitationem facere, nesciunt non optio perspiciatis quam totam unde voluptas? Harum necessitatibus quas quia soluta. Ad amet aperiam corporis ea, necessitatibus nesciunt nisi placeat qui quia similique tenetur, vel veritatis voluptas! Aliquam blanditiis nobis quam.',
                    likeCount: Math.floor(Math.random() * 2)
                },
                {
                    id: 2,
                    imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_${Math.ceil(Math.random() * 16)}.jpg`,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laboriosam mollitia nemo neque quae! Autem culpa dolor dolorem error, exercitationem facere, nesciunt non optio perspiciatis quam totam unde voluptas? Harum necessitatibus quas quia soluta. Ad amet aperiam corporis ea, necessitatibus nesciunt nisi placeat qui quia similique tenetur, vel veritatis voluptas! Aliquam blanditiis nobis quam.',
                    likeCount: Math.floor(Math.random() * 2)
                },
                {
                    id: 3,
                    imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_${Math.ceil(Math.random() * 16)}.jpg`,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laboriosam mollitia nemo neque quae! Autem culpa dolor dolorem error, exercitationem facere, nesciunt non optio perspiciatis quam totam unde voluptas? Harum necessitatibus quas quia soluta. Ad amet aperiam corporis ea, necessitatibus nesciunt nisi placeat qui quia similique tenetur, vel veritatis voluptas! Aliquam blanditiis nobis quam.',
                    likeCount: Math.floor(Math.random() * 2)
                },
                {
                    id: 3,
                    imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_${Math.ceil(Math.random() * 16)}.jpg`,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laboriosam mollitia nemo neque quae! Autem culpa dolor dolorem error, exercitationem facere, nesciunt non optio perspiciatis quam totam unde voluptas? Harum necessitatibus quas quia soluta. Ad amet aperiam corporis ea, necessitatibus nesciunt nisi placeat qui quia similique tenetur, vel veritatis voluptas! Aliquam blanditiis nobis quam.',
                    likeCount: Math.floor(Math.random() * 2)
                },
                {
                    id: 3,
                    imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_${Math.ceil(Math.random() * 16)}.jpg`,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laboriosam mollitia nemo neque quae! Autem culpa dolor dolorem error, exercitationem facere, nesciunt non optio perspiciatis quam totam unde voluptas? Harum necessitatibus quas quia soluta. Ad amet aperiam corporis ea, necessitatibus nesciunt nisi placeat qui quia similique tenetur, vel veritatis voluptas! Aliquam blanditiis nobis quam.',
                    likeCount: Math.floor(Math.random() * 2)
                },
            ],
            _text: ``
        },
        messagesPage: [
            {
                id: 0,
                user: {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37CMX8RlzAmXX-EPoDiC6FJXHN5Ead7z6tw&usqp=CAU',
                    name: 'Jim',
                },
                message: {
                    text: 'some text some text some ',
                    time: '22:00',
                },
            },
            {
                id: 100,
                user: {
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HMVDOCyIYb3jEW267vCntUH7-dxBWiNGLA&usqp=CAU',
                    name: 'Chuck',
                },
                message: {
                    text: 'зеркальное сообщение для тренировки css',
                    time: '22:00',
                },
            }
        ],
        membersPage: {
            usersList: [
                {
                    imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
                    name: 'User Name',
                    lastOnline: `${Math.ceil(Math.random() * 29)} days ago`,
                    id: 1,
                    messages: [
                        {id: 1, message: 'some text user 1'},
                    ]
                },
                {
                    imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
                    name: 'User Name',
                    lastOnline: `${Math.ceil(Math.random() * 29)} days ago`,
                    id: 2,
                    messages: [
                        {id: 1, message: 'some text user 2'},
                    ]
                },
                {
                    imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_${Math.ceil(Math.random() * 25)}.jpg`,
                    name: 'User Name',
                    lastOnline: `${Math.ceil(Math.random() * 29)} days ago`,
                    id: 3,
                    messages: [
                        {id: 1, message: 'some text user 3'},
                    ]
                },
            ]
        },
        aside: [
            {name: 'Profile', href: '/', icon: "fa-duotone fa-house-chimney-user fa-xl"},
            {name: 'News', href: '/news', icon: "fa-duotone fa-newspaper fa-xl"},
            {name: 'Dialogs', href: '/dialogs', icon: "fa-duotone fa-messages fa-xl"},
            {name: 'Members', href: '/members', icon: "fa-duotone fa-people-carry-box fa-xl"},
        ],
    },

    getState() {
        return this._state
    },
    onChange() {
    },
    subscribe(observer: (state: ReduxStoreType) => void) {
        // this.onChange = observer
    },

    dispatch(action: ActionType) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this.onChange(this.getState())
    }
}
export type ActionType = ActionProfileType

// window.store = store*/
