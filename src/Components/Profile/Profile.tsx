import React from 'react';

import {MyPostPropsType, MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



// type
// беру тип из компоненты ниже.


export const Profile = (props: MyPostPropsType) => {
    return   (
        <div>
       <ProfileInfo/>
       <MyPosts profilePage={props.profilePage}
                dispatch={props.dispatch}/>
        </div>
)
}


//store.dispatch.bind(store)