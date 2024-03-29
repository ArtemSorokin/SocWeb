import {applyMiddleware, combineReducers, legacy_createStore} from "@reduxjs/toolkit";
import {profileReducer} from "./ProfileReducer";
import {dialogReducer} from "./DialogReducer";
import {sidebarReducer} from "./SidebarReducer";
import { UsersReducer} from "./UsersReducer";
import {authorizedReducer} from "./authorizedReduser";
 import thunkMiddleware from 'redux-thunk';

export type RootStateType = ReturnType< typeof store.getState>
export type AppDispatch =  typeof store.dispatch
export type StoreType = typeof store

type  AddPostActionType = {
    type:'AddPost'
}
type UpdatePostTextActionType = {
    type:'UpdatePostText'
    newPostText: string
}
type NewDialogMessageText = {
    type: 'NewDialogMessageText'
    newDialogMessageText: string
}
type AddDialogMessageText = {
    type: 'AddDialogMessageText'
}
type FOLLOWActionsType = {
    type: 'FOLLOW'
    userID: number
}
type UNFOLLOWActionsType = {
    type: 'UNFOLLOW'
    userID: number
}
type SetusersActionType = {
    type: 'SETUSERS'
    usersArray: Array<{id: number, photoUrl: string, followed: boolean, name: string, status: string, location:{city: string, country: string} }>
}
type SetCurrentPageActionType = {
    type: 'SETCURRENTPAGE'
    currentPage: number
}
type SetCurrenttotalCount = {
    type: 'totalCount'
    totalCount: number
}
type setIsFetchingPreloadGifPropsType= {
    type: 'setIsFetchingPreloadGif'
    isFetchingPreloadGif: boolean
}
type setUsersProfilePropsType = {
    type: 'setUsersProfile'
    profile:any
}
type SetAuthorisedActionCreator = {
    type:'SET_AUTHORISED'
    data: {
        userId: number,
        email: string,
        login:string,
        authorised: boolean
    }

}
type toggleDisabledButtonACType = {
    type: "toggleFollowingInProges"
    isFetching: boolean
    userId: number
}


 export type ActionsTypes = AddPostActionType | UpdatePostTextActionType | NewDialogMessageText | AddDialogMessageText |
     FOLLOWActionsType | UNFOLLOWActionsType | SetusersActionType | SetCurrentPageActionType | SetCurrenttotalCount |
     setIsFetchingPreloadGifPropsType | setUsersProfilePropsType | SetAuthorisedActionCreator | toggleDisabledButtonACType

type ReducersType =  typeof reducers
export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    sidebarReducer: sidebarReducer,
    usersPage: UsersReducer,
    authorized: authorizedReducer
})

export let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware)) /// переделать


// @ts-ignore
window.store = store // ?