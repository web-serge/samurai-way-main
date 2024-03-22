
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
const initialState: ProfilePageType = {
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
    }

export const ProfileReducer = (state = initialState, action: ActionProfileType): ProfilePageType => {
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
            return {...state}
        }
        case 'UPDATE-TEXT': {
            state._text = action.text
            return {...state}
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