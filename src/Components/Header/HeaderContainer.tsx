import React, {useEffect} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getMeThunk} from "../../Redux/authorizedReduser";
import {RootStateType} from "../../Redux/Redux-store";

type mapStatetoPropsType = {
    authorized: boolean
    login: string
}

type mapDispachToPropsType = {
    getMeThunk: ()=> void,
}

type HeaderContainerType = mapStatetoPropsType & mapDispachToPropsType


const HeaderContainer = (props:HeaderContainerType)=> {

    useEffect( ()=> {

        props.getMeThunk()


    },[])

        return <Header {...props} login={props.login} authorized={props.authorized}/>
}


let mapStatetoProps = (state: RootStateType): mapStatetoPropsType=>({
    authorized: state.authorized.data.authorised,
    login: state.authorized.data.login
})


export default  connect(mapStatetoProps,{getMeThunk} )(HeaderContainer)