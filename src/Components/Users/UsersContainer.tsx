import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {
    FollowUserActionCreator,
    SetCurrentPageActionCreator, setIsFetchingPreloadGifAC,
    settotalCountPageActionCreator,
    SetUsersActionCreator,
    UnfollowUserActionCreator,
    UserUnitType
} from "../../Redux/UsersReducer";
import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {Users} from "./Users";
import Preloader from '../ResForAllComponrnts/Preloader/Preloader.png'


export type mapStateToPropsType = {
    users: Array<UserUnitType>
    pagesize: number
    totalCount: number
    currentPage: number
    isFetchingPreloadGif: boolean
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (usersArray: Array<UserUnitType>) => void
    setCurrentPage:(pageNumber:number)=> void
    settotalCount:(totalCount: number) => void
    setIsFetchingPreloadGif: (isFetchingPreloadGif:boolean)=> void
}
export type UserComponentPropsType = mapStateToPropsType & mapDispatchToPropsType


export class UsersClassComponent extends React.Component<UserComponentPropsType> {

    componentDidMount() {
        // запрос списка юзеров
        this.props.setIsFetchingPreloadGif(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`).then(response => {
            this.props.setIsFetchingPreloadGif(false)
            this.props.setUsers(response.data.items)
            this.props.settotalCount(response.data.totalCount)
        })
    }

    setCurrentPage = (currentPage:number)=>{
        this.props.setCurrentPage(currentPage)
        this.props.setIsFetchingPreloadGif(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pagesize}`).then(response => {
            this.props.setIsFetchingPreloadGif(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <>
             {this.props.isFetchingPreloadGif? <img src={Preloader}/> : null}

        <Users
            users={this.props.users}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            pagesize={this.props.pagesize}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            setCurrentPage={this.setCurrentPage} />
        </>

    }

}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pagesize: state.usersPage.pagesize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetchingPreloadGif: state.usersPage.isFetchingPreloadGif
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
        },
        setIsFetchingPreloadGif: (isFetchingPreloadGif:boolean)=> {
            dispatch(setIsFetchingPreloadGifAC(isFetchingPreloadGif))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)