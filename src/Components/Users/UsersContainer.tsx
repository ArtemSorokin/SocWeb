import React  from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootState} from "../../Redux/Redux-store";
import {
  FollowUserActionCreator,
  SetUsersActionCreator,
  UnfollowUserActionCreator,
  UsersInitStateType, UserUnitType
} from "../../Redux/UsersReducer";
import {Dispatch} from "@reduxjs/toolkit";


type mapStateToPropsType = {
  users: Array<UserUnitType>    // /////////////////////////////////////
}

type mapDispatchToPropsType = {
  follow: (userId: number)=> void,
  unFollow: (userId: number)=> void,
  setUsers: (usersArray: Array<UserUnitType>) => void
}

export type UserComponentPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState): mapStateToPropsType=> {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=>{

  return {
    follow: (userId: number)=> {dispatch(FollowUserActionCreator(userId))},
    unFollow: (userId: number)=> {dispatch(UnfollowUserActionCreator(userId))},
    setUsers: (usersArray: Array<UserUnitType> ) => {dispatch(SetUsersActionCreator(usersArray))}
  }
}


export const UsersContainer =  connect(mapStateToProps,mapDispatchToProps)(Users)