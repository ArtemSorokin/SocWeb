import React, {createRef} from 'react';
import {AddPostActionCreator, UpdatePostTextActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {RootState} from "../../../Redux/Redux-store";
import {connect} from "react-redux";


// export type MyPostPropsContainerType = {
//     profilePage: {
//         postData: Array<{ message: string, likes: number }>
//         newPostText: string
//     }
//     dispatch: (action: any) => void
//
// }



let mapStateToProps = (state: RootState) => {
    return {
        newPostText: state.profileReducer.newPostText,
        postData: state.profileReducer.postData
    }
}

let mapDispatchToProps = (dispatch: any) => {

    return {
        onChange: (newPostText: string)=>{
            let action = UpdatePostTextActionCreator(newPostText)
            dispatch(action)
        },
        addPost: ()=> { dispatch(AddPostActionCreator())}
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)