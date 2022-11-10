import React from 'react';
import {connect} from "react-redux";

import {RootStateType} from "../../Redux/Redux-store";
import {
    FollowUserActionCreator,
    SetCurrentPageActionCreator,
    settotalCountPageActionCreator,
    SetUsersActionCreator,
    UnfollowUserActionCreator,
    UserUnitType
} from "../../Redux/UsersReducer";
import {Dispatch} from "@reduxjs/toolkit";
import {UsersClassComponent} from "./UsersClassComponent ";


export type mapStateToPropsType = {
    users: Array<UserUnitType>
    pagesize: number
    totalCount: number
    currentPage: number
}

export type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (usersArray: Array<UserUnitType>) => void
    setCurrentPage:(pageNumber:number)=> void
    settotalCount:(totalCount: number) => void
}

export type UserComponentPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pagesize: state.usersPage.pagesize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage

    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {

    return {
        follow: (userId: number) => {
            dispatch(FollowUserActionCreator(userId))
        },
        unFollow: (userId: number) => {
            dispatch(UnfollowUserActionCreator(userId))
        },
        setUsers: (usersArray: Array<UserUnitType>) => {
            dispatch(SetUsersActionCreator(usersArray))
        },
        setCurrentPage: (currentPage:number) => {
            dispatch(SetCurrentPageActionCreator(currentPage))
        },
        settotalCount: (totalCount:number) => {
            dispatch(settotalCountPageActionCreator(totalCount))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)