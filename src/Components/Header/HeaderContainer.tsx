import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authorizedReducer, SetAuthorisedActionCreator} from "../../Redux/authorizedReduser";
import axios from "axios";
import {RootStateType} from "../../Redux/Redux-store";

export class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` , {withCredentials: true}).then(response => {
            let {id, login, email} = response.data
            this.props.SetAuthorisedActionCreator(id, login, email)
        })
    }

    render(){

        return (<>
              <Header />
            </>
        )
    }

}
let mapStatetoProps = (state: RootStateType)=>{

    login: state.authorizedReducer.data.login


}

connect(mapStatetoProps,{SetAuthorisedActionCreator} )(HeaderContainer)