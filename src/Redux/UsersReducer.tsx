import {ActionsTypes} from "./Redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

type UserUnit = {id: number, followed: boolean, fullname: string, status: string, location:{city: string, country: string} }
type UsersInitStateType = {
    users: Array<UserUnit>
}



let UsersInitState:UsersInitStateType = {
    users: [
        {id: 1, followed: false, fullname: 'Jotaro', status:'Travel to Egypt', location:{city: 'Budapecht', country:'Cracogia'}},
        {id: 2, followed: false, fullname: 'Polnaref', status:'Travel too', location:{city: 'Budapecht', country:'Cracogia'}},
        {id: 3, followed: true, fullname: 'Kakeyn', status:'Travel too', location:{city: 'Budapecht', country:'Cracogia'}}
    ]
}

export const FollowUser = (userID: number)=> ({type: FOLLOW, userID})
export const UnfollowUser = (userID: number)=> ({type: UNFOLLOW, userID})



export const profileReducer = (state:UsersInitStateType = UsersInitState, action: ActionsTypes): UsersInitStateType => {
    switch (action.type) {
        case FOLLOW:

        default:
            return state
    }

}

