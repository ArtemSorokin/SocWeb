import {useNavigate} from "react-router-dom";
import React, {Component} from "react";
import {Users} from "../Components/Users/Users";
import {Login} from "../Components/Login/Login";
import {RootStateType} from "../Redux/Redux-store";
import {connect} from "react-redux";
type mapStateToPropsType = {
    profile?: any
    auth: boolean
}

// не смог использовать useNavigate
export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {

        render() {

            // let redirect = useNavigate()
            if (!this.props.auth) {
                return <Login/>

            }
            return <Component{...this.props}/>
        }
    }

    let mapStatetoPropsForAuthRedirect = (state: RootStateType): mapStateToPropsType => ({
        // profile: state.profileReducer.profile,
        auth: state.authorized.data.authorised
    })

    let ConnectedAuthRedirectComponent = connect(mapStatetoPropsForAuthRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
