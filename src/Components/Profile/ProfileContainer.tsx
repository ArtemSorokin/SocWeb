import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {setUsersProfileAC} from "../../Redux/ProfileReducer";
import {useParams,} from "react-router-dom";


type mapStateToPropsType = {
    profile: any

}
type mapDispatchToPropsType = {
    setUsersProfileAC: (profile: any) => void
}
type ProfileClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export const ProfileClassContainer = (props: ProfileClassContainerPropsType) => {
    // let {userId} =   useParams()
    let {userId} = useParams()

    if (!userId) {
        userId = '24946'
    }

    // componentDidMount() {
    //
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
    //
    //         this.props.setUsersProfileAC(response.data)
    //     })
    // }

    useEffect(() => {
        /// useParams &&&&& props.profile.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {

            props.setUsersProfileAC(response.data)
        })
    }, [userId])

    return (

        <div>
            <Profile  {...props} profile={props.profile}/>

        </div>
    )

}

let mapStatetoProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profileReducer.profile
})


export const ProfileContainer = connect(mapStatetoProps, {setUsersProfileAC})(ProfileClassContainer)



