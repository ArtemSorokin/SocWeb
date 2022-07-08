import {combineReducers, configureStore, createStore, legacy_createStore, Unsubscribe} from "@reduxjs/toolkit";
import {profileReducer} from "./ProfileReducer";
import {dialogReducer} from "./DialogReducer";
import {sidebarReducer} from "./SidebarReducer";

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
    userId: number
}
type UNFOLLOWActionsType = {
    type: 'UNFOLLOW'
    userId: number
}

 export type ActionsTypes = AddPostActionType | UpdatePostTextActionType | NewDialogMessageText | AddDialogMessageText | FOLLOWActionsType | UNFOLLOWActionsType

type ReducersType =  typeof reducers
export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    sidebarReducer: sidebarReducer
})

export let store = legacy_createStore(reducers) /// переделать


 // @ts-ignore
window.store = store