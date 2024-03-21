import {PostType, ProfilePageType} from '../store';

export const ProfileReducer = (state: ProfilePageType, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: state.posts.length + 1,
                imgUrl: `https://api-prod-minimal-v510.vercel.app/assets/images/travel/travel_${Math.ceil(Math.random() * 16)}.jpg`,
                description: state._text,
                likeCount: 0
            }
            state.posts.unshift(newPost)
            state._text = ''
            return state
        }
        case 'UPDATE-TEXT': {
            state._text = action.text
            return state
        }
        default:
            return  state
    }
};

export type ActionProfileType = AddPostACType | UpdateTextACType

type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => ({type: 'ADD-POST'} as const)

type UpdateTextACType = ReturnType<typeof updateTextAC>
export const updateTextAC = (text: string) => ({type: 'UPDATE-TEXT', text} as const)