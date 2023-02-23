import React, {useEffect} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authorizedReducer, SetAuthorisedActionCreator} from "../../Redux/authorizedReduser";
import axios from "axios";
import {RootStateType} from "../../Redux/Redux-store";


type mapStatetoPropsType = {
    authorized: boolean
    login: string
}

type mapDispachToPropsType = {
    SetAuthorisedActionCreator: (
        email: string,
        id:number,
        login: string )=> void,
}

type HeaderContainerType = mapStatetoPropsType & mapDispachToPropsType


const HeaderContainer = (props:HeaderContainerType)=> {

    // componentDidMount() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` , {withCredentials: true}).then(response => {
    //
    //         if(response.data.result === 0 ) {
    //
    //             let {id, login, email} = response.data.data
    //             SetAuthorisedActionCreator(id, login, email)
    //         }
    //     })
    // }

    useEffect( ()=> {
                axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` , {withCredentials: true}).then(response => {

                    if(response.data.resultCode === 0 ) {
                        let {email, id, login } = response.data.data

                        props.SetAuthorisedActionCreator(email, id, login )
                    }
        })

    },[])

        return <Header {...props} login={props.login} authorized={props.authorized}/>
}


let mapStatetoProps = (state: RootStateType): mapStatetoPropsType=>({
    authorized: state.authorized.data.authorised,
    login: state.authorized.data.login
})

export default  connect(mapStatetoProps,{SetAuthorisedActionCreator} )(HeaderContainer)