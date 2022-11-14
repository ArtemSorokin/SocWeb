import React, {createRef} from 'react';
import {MyPost} from "./MyPost/MyPost";


export type MyPostsPropsType = {
    onChange: (text: string) => void
    addPost: () => void
    newPostText: string
    postData: Array<{ message: string, likes: number }>
}


export const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.postData.map((p) => <MyPost message={p.message} likes={p.likes}/>)


    let textPost = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addPost()
    }

    let changePostText = () => {
        // @ts-ignore
        let text: string = textPost.current.value
        props.onChange(text)


    }

    return <div>
        <div> My Posts </div>
        <div>
            <div>
                <textarea ref={textPost} onChange={changePostText} value={props.newPostText}/>
            </div>

            <div>
                <button onClick={addPost}> add post</button>
            </div>

        </div>
        {postElement}
    </div>
}