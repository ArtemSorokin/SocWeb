import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    profile:any
}


export const Profile = (props:ProfilePropsType) => {
    return   (
        <div>
       <ProfileInfo profile={props.profile} />
        <MyPostsContainer  />

        </div>
)
}


