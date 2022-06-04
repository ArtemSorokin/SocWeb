import React, {createRef} from 'react';

import {MyPost} from "./MyPost/MyPost";
import {AddPostActionCreator, UpdatePostTextActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {ReactContextForApp} from "../../../ReactContext";
import {AppStateType} from "../../../Redux/Redux-store";


// export type MyPostPropsContainerType = {
//     profilePage: {
//         postData: Array<{ message: string, likes: number }>
//         newPostText: string
//     }
//     dispatch: (action: any) => void
//
// }


export const MyPostsContainer = () => {

    return ( <ReactContextForApp.Consumer>
            { store => {
                let addPost = () => {
                    debugger

                    store.dispatch(AddPostActionCreator())
                }

                let changePostText = (newPostText: string) => {

                    let action = UpdatePostTextActionCreator(newPostText);
                    store.dispatch(action)
                }
                return (


        <MyPosts onChange={changePostText}
                 addPost={addPost}
                 newPostText={store.getState().profileReducer.newPostText}
                 postData={store.getState().profileReducer.postData}
        /> ) }}
        </ReactContextForApp.Consumer>)
}


