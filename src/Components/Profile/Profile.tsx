import React from 'react';


import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AppDispatch} from "../../Redux/Redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



type ProfilePropsType = {
    profilePage:{postData: {message: string, likes: number}[], newPostText: string}
    dispatch:  AppDispatch
}



export const Profile = () => {
    return   (
        <div>
       <ProfileInfo/>
       <MyPostsContainer />
        </div>
)
}


//store.dispatch.bind(store)