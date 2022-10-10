import {combineReducers, legacy_createStore} from "@reduxjs/toolkit";
import {profileReducer} from "./ProfileReducer";
import {dialogReducer} from "./DialogReducer";
import {sidebarReducer} from "./SidebarReducer";
import {UsersReducer} from "./UsersReducer";

export type RootState = ReturnType< typeof store.getState>
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

 export type ActionsTypes = AddPostActionType | UpdatePostTextActionType | NewDialogMessageText | AddDialogMessageText | FOLLOWActionsType | UNFOLLOWActionsType | SetusersActionType

type ReducersType =  typeof reducers
export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    sidebarReducer: sidebarReducer,
    usersPage: UsersReducer
})

export let store = legacy_createStore(reducers) /// переделать


