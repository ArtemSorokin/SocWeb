import React, {createRef} from 'react';

import {MyPost} from "./MyPost/MyPost";
import {AddPostActionCreator, UpdatePostTextActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";


export type MyPostPropsContainerType = {
    profilePage: {
        postData: Array<{ message: string, likes: number }>
        newPostText: string
    }
    dispatch: (action: any) => void

}


export const MyPostsContainer = (props: MyPostPropsContainerType) => {


    let addPost = () => {
        props.dispatch(AddPostActionCreator())
    }


    let changePostText = (text: string) => {

        let action = UpdatePostTextActionCreator(text);
        props.dispatch(action)
    }


    return <MyPosts onChange={changePostText} addPost={addPost} newPostText={props.profilePage.newPostText} postData={props.profilePage.postData}/>
}