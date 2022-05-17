import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import {profileReducer} from "./ProfileReducer";
import {dialogReducer} from "./DialogReducer";

export type StateType = {
    // dialogPage: {
    //     dialogData: Array<{ id: number, name: string }>
    //     messageData: Array<{ message: string, likeCount?: number }>
    //     newDialogMessageText:string
    // },
    // profilePage: {
    //     postData: Array<{ message: string, likes: number }>,
    //     newPostText: string
    // }
}

export type StoreType = {
    state: StateType
    subscribe: (observer:(state:StateType)=>void)=> void
    dispatch:(action: AddPostActionType | UpdatePostTextActionType)=>void

}
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

export type ActionsTypes = AddPostActionType | UpdatePostTextActionType | NewDialogMessageText | AddDialogMessageText




let reducers = combineReducers({
    profileReducer,
    dialogReducer
})

export let store = createStore(reducers)

