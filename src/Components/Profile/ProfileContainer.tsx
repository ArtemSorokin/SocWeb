import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {getProfileThunk} from "../../Redux/ProfileReducer";
import {useNavigate, useParams,} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";

// не обязательный пропс чтобы передать значения в Хок/ Заменить хок
type mapStateToPropsType = {
    profile?: any
    auth?: boolean
}
type mapDispatchToPropsType = {
    getProfileThunk: (profile: any) => void
}
type ProfileClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

export const ProfileClassContainer = (props: ProfileClassContainerPropsType) => {



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
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
        //
        //     props.setUsersProfileAC(response.data)
        // })

        props.getProfileThunk(userId)
    }, [userId])



    return (

        <div>
            <Profile  {...props} profile={props.profile}/>

        </div>
    )

}

let AuthRedirectComponent = withAuthRedirect(ProfileClassContainer)


// let mapStatetoPropsForAuthRedirect = (state: RootStateType): mapStateToPropsType => ({
//     // profile: state.profileReducer.profile,
//     auth: state.authorized.data.authorised
// })



// AuthRedirectComponent = connect(mapStatetoPropsForAuthRedirect)(AuthRedirectComponent)


//     (props: any) => {
//     let redirect = useNavigate()
//     if(!props.auth){
//         redirect('/login')
//     }
//     return <ProfileClassContainer {...props}/>
// }

let mapStatetoProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.profileReducer.profile
    // auth: state.authorized.data.authorised
})


export const ProfileContainer = connect(mapStatetoProps, {getProfileThunk})(AuthRedirectComponent)



