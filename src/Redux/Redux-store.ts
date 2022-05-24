import {combineReducers, configureStore, createStore, legacy_createStore, Unsubscribe} from "@reduxjs/toolkit";
import {profileReducer} from "./ProfileReducer";
import {dialogReducer} from "./DialogReducer";
import {sidebarReducer} from "./SidebarReducer";

export type RootState = typeof store
// export type State = ReturnType<RootState>
// export type StateType = {
//     dialogPage: {
//         dialogData: Array<{ id: number, name: string }>
//         messageData: Array<{ message: string, likeCount?: number }>
//         newDialogMessageText:string
//     },
//     profilePage: {
//         postData: Array<{ message: string, likes: number }>,
//         newPostText: string
//     }
// }

// export type StoreType = {
//     state: RootState
//     // subscribe: (observer:(state:StateType)=>void)=> void
//     subscribe:(listener: () => void) => Unsubscribe  // ?????
//     dispatch:(action: AddPostActionType | UpdatePostTextActionType)=>void
//
//
// }
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

type ReducersType =  typeof reducers
export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogReducer: dialogReducer,
    sidebarReducer: sidebarReducer
})

export let store = legacy_createStore(reducers) /// переделать

