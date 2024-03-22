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
const initialState: MessagesType[] = [
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
]

export const messagesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'XXX': {
            return state
        }
        default:
            return  state
    }
};
