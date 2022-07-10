import React  from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootState} from "../../Redux/Redux-store";
import {
  FollowUserActionCreator,
  SetUsersActionCreator,
  UnfollowUserActionCreator,
  UsersInitStateType
} from "../../Redux/UsersReducer";



const mapStateToProps = (state: RootState)=> {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch: any)=>{
  debugger
  return {
    follow: (userId: number)=> {dispatch(FollowUserActionCreator(userId))},
    unFollow: (userId: number)=> {dispatch(UnfollowUserActionCreator(userId))},
    setUsers: (usersArray: UsersInitStateType) => {dispatch(SetUsersActionCreator(usersArray))}
  }
}


export const UsersContainer =  connect(mapStateToProps,mapDispatchToProps)(Users)