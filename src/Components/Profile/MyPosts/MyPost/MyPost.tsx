import React from 'react';
import s from './MyPost.module.css'

export type MyPostPropsType = {
    message: string
    likes: number
}

export const MyPost = (props: MyPostPropsType) => {
    return   <div className= {s.itemPost}>

            <img src='https://www.meme-arsenal.com/memes/7eda9d4eada2e1aa3fd2abb866360633.jpg'/>
        {props.message}
        <div>
            <span> {props.likes} </span>
        </div>

    </div>
}