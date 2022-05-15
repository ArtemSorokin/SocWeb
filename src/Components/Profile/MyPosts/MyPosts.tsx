import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import {MyPost} from "./MyPost/MyPost";
import { AddPostActionCreator, UpdatePostTextActionCreator} from "../../../Redux/ProfileReducer";





export type MyPostPropsType = {
    profilePage: {
        postData: Array<{ message: string, likes: number }>
        newPostText: string
    }
    // addPost: (newMessage: string) => void
    // updatePostText: (newPostText: string) => void
    dispatch:(action:any)=>void   /// разобраться

}






export const MyPosts = (props: MyPostPropsType) => {

    let postElement = props.profilePage.postData.map(p => <MyPost message={p.message} like={p.likes}/>)


    let textPost = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {


        // @ts-ignore // Поправить

        props.dispatch(AddPostActionCreator())
        // @ts-ignore
        // textPost.current.value = ''

    }

    let changePostText = () => {
        //
    // @ts-ignore
        let text: string = textPost.current.value
        let action = UpdatePostTextActionCreator(text);
        props.dispatch(action)


    }

    return <div>
        <div> My Posts</div>
        <div>
            <div>
                <textarea ref={textPost} onChange={changePostText} value={props.profilePage.newPostText}/>
            </div>

            <div>
                <button onClick={addPost}> add post</button>
            </div>

        </div>
        {postElement}
    </div>
}