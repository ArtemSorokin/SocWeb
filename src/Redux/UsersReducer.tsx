import {ActionsTypes} from "./Redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SetUsers = 'SETUSERS'

type UserUnit = {id: number, photoUrl: string, followed: boolean, fullname: string, status: string, location:{city: string, country: string} }

export type UsersInitStateType = {
    users: Array<UserUnit>
}

let UsersInitState:UsersInitStateType = {
    users: [
        {id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/7eda9d4eada2e1aa3fd2abb866360633.jpg', followed: true, fullname: 'Jotaro', status:'Travel to Egypt', location:{city: 'Budapecht', country:'Cracogia'}},
        {id: 2, photoUrl: 'https://www.meme-arsenal.com/memes/7eda9d4eada2e1aa3fd2abb866360633.jpg', followed: false, fullname: 'Polnaref', status:'Travel too', location:{city: 'Budapecht', country:'Cracogia'}},
        {id: 3, photoUrl: 'https://www.meme-arsenal.com/memes/7eda9d4eada2e1aa3fd2abb866360633.jpg', followed: true, fullname: 'Kakeyn', status:'Travel too', location:{city: 'Budapecht', country:'Cracogia'}}
    ]
}

export const FollowUserActionCreator = (userID: number)=>  ({type: FOLLOW, userID} as const )
export const UnfollowUserActionCreator = (userID: number)=> ({type: UNFOLLOW, userID} as const)
export const SetUsersActionCreator = (usersArray:UsersInitStateType )=> ({type: SetUsers, usersArray} as const)



export const UsersReducer = (state:UsersInitStateType = UsersInitState, action: ActionsTypes): UsersInitStateType => {

    switch (action.type) {
        case FOLLOW:

            return {

                ...state, users: state.users.map(
                    (u)=> {
                        if(u.id === action.userID) {
                            return{ ...u, followed: true}
                        }
                     return u
                    })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map( (u)=>{
                    if(u.id === action.userID) {
                        return {...u, followed: false }
                    }
                    return u
                })
            }
        case  SetUsers:
            return {
                ...state, users: [...state.users, ...action.usersArray]
            }
        default:
            return state
    }
}

