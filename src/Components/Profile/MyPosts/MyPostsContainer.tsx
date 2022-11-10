import React, {createRef} from 'react';
import {AddPostActionCreator, UpdatePostTextActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../Redux/Redux-store";
import {connect} from "react-redux";


type mapStateToPropsType = {
    newPostText: string
    postData: Array<{ message: string, likes: number }>
}

type mapDispatchToPropsType = {
    onChange: (newPostText: string)=> void
    addPost:()=>void
}

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        newPostText: state.profileReducer.newPostText,
        postData: state.profileReducer.postData
    }
}

let mapDispatchToProps = (dispatch: any):mapDispatchToPropsType => {

    return {
        onChange: (newPostText: string)=>{
            let action = UpdatePostTextActionCreator(newPostText)
            dispatch(action)
        },
        addPost: ()=> { dispatch(AddPostActionCreator())}
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)