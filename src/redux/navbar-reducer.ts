export type AsideLinkType = {
    href: string
    name: string
    icon: string
}
const initialState: AsideLinkType[] = [
    {name: 'Profile', href: '/', icon: "fa-duotone fa-house-chimney-user fa-xl"},
    {name: 'News', href: '/news', icon: "fa-duotone fa-newspaper fa-xl"},
    {name: 'Dialogs', href: '/dialogs', icon: "fa-duotone fa-messages fa-xl"},
    {name: 'Members', href: '/members', icon: "fa-duotone fa-people-carry-box fa-xl"},
]

export const navbarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'XXX': {
            return state
        }
        default:
            return  state
    }
};
