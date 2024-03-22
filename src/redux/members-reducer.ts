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

const initialState: UserListType[] = [
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

export const membersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'XXX': {
            return state
        }
        default:
            return  state
    }
};
