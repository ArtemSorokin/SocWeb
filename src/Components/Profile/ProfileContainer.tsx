import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {setUsersProfileAC} from "../../Redux/ProfileReducer";


 type mapStateToPropsType = {
     profile: any
}
 type mapDispatchToPropsType = {
    setUsersProfileAC: (profile:any)=> void
}
type ProfileClassContainerPropsType = mapStateToPropsType | mapDispatchToPropsType

export class ProfileClassContainer extends React.Component<ProfileClassContainerPropsType> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {

            this.props.setUsersProfileAC(response.data)

        })
    }


    render() {
        return (

            <div>
                <Profile {...this.props} profile={this.props.profile} />
                <MyPostsContainer/>
            </div>
        )

    }
}

let mapStatetoProps = (state:RootStateType): mapStateToPropsType=>({
    profile: state.profileReducer.profile
})

export const ProfileContainer = connect(mapStatetoProps, {setUsersProfileAC})(ProfileClassContainer)



