import {useNavigate} from "react-router-dom";
import React, {Component} from "react";
import {Users} from "../Components/Users/Users";



export const withAuthRedirect = (Component: any) => {

 let RedirectComponent = ()=> {
     // let NewComponent = Component
     //        let redirect = useNavigate()
     //        // if(!props.auth){
     //            redirect('/login')
     //        // }
            return <Component/>


    }
}