import {ActionsTypes} from "./Redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SetUsers = 'SETUSERS'
const setCurrentPage = 'SETCURRENTPAGE'
const settotalCount = 'totalCount'
const setIsFetchingPreloadGif = "setIsFetchingPreloadGif"

export type UserUnitType ={
    id: number, photoUrl: string, followed: boolean, name: string, status: string, location:{city: string, country: string}
}

export type UsersInitStateType = {
    users: Array<UserUnitType>
    pagesize: number
    totalCount: number
    currentPage: number
    isFetchingPreloadGif: boolean
    followed: boolean
}

let UsersInitState:UsersInitStateType = {
    users: [],
    pagesize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetchingPreloadGif: false,
    followed: false

}

export const FollowUserActionCreator = (userID: number)=>  ({type: FOLLOW, userID} as const )
export const UnfollowUserActionCreator = (userID: number)=> ({type: UNFOLLOW, userID} as const)
export const SetUsersActionCreator = (usersArray:Array<UserUnitType>  )=> ({type: SetUsers, usersArray} as const)
export const SetCurrentPageActionCreator = (currentPage:number) => ({type: setCurrentPage, currentPage: currentPage})
export const settotalCountPageActionCreator = (totalCount:number) => ({type: settotalCount, totalCount: totalCount})
export const setIsFetchingPreloadGifAC = (isFetchingPreloadGif: boolean)=> ({ type: setIsFetchingPreloadGif, isFetchingPreloadGif})


export const UsersReducer = (state:UsersInitStateType = UsersInitState, action: ActionsTypes): UsersInitStateType => {
debugger
    switch (action.type) {

        case FOLLOW:
            return {

                ...state, users: state.users.map(
                    (u)=> {
                        if(u.id === action.userID) {
                            return { ...u, followed: false}
                        }
                     return u
                    })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map( (u)=>{
                    if(u.id === action.userID) {
                        return {...u, followed: true }
                    }
                    return u
                })
            }
        case  SetUsers:
            return {
                ...state, users: [ ...action.usersArray]
            }
        case  setCurrentPage:
            return {
                ...state, currentPage: action.currentPage
            }
        case  settotalCount:
            return {
                ...state, totalCount: action.totalCount
            }
        case setIsFetchingPreloadGif:
            return {
                ...state, isFetchingPreloadGif: action.isFetchingPreloadGif
            }
        default:
            return state
    }
}