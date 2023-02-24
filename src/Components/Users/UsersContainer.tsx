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
import axios from "axios";
import {Users} from "./Users";
import Preloader from '../ResForAllComponrnts/Preloader/Preloader.png'
import {userApi} from "../../ServerApi/UsersServerApi";


export type mapStateToPropsType = {
    users: Array<UserUnitType>
    pagesize: number
    totalCount: number
    currentPage: number
    isFetchingPreloadGif: boolean
    followed: boolean
}
export type mapDispatchToPropsType = {
    FollowUserActionCreator: (userId: number) => void
        UnfollowUserActionCreator: (userId: number) => void,
    SetUsersActionCreator: (usersArray: Array<UserUnitType>) => void
    SetCurrentPageActionCreator:(pageNumber:number)=> void
    settotalCountPageActionCreator:(totalCount: number) => void
    setIsFetchingPreloadGifAC: (isFetchingPreloadGif:boolean)=> void
}
export type UserComponentPropsType = mapStateToPropsType & mapDispatchToPropsType


export class UsersClassComponent extends React.Component<UserComponentPropsType> {

    componentDidMount() {

        // запрос списка юзеров
        this.props.setIsFetchingPreloadGifAC(true)
        userApi.getUsers(this.props.currentPage, this.props.pagesize).then(data => {
            this.props.setIsFetchingPreloadGifAC(false)
            this.props.SetUsersActionCreator(data.items)
            this.props.settotalCountPageActionCreator(data.totalCount)
        })
    }

    setCurrentPage = (currentPage:number)=>{
        this.props.SetCurrentPageActionCreator(currentPage)
        this.props.setIsFetchingPreloadGifAC(true)
        userApi.getUsers(currentPage, this.props.pagesize).then(data => {
            this.props.setIsFetchingPreloadGifAC(false)
            this.props.SetUsersActionCreator(data.items)
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
            follow={this.props.FollowUserActionCreator}
            unFollow={this.props.UnfollowUserActionCreator}
            setCurrentPage={this.setCurrentPage}
            followed={this.props.followed}

        />
        </>

    }

}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pagesize: state.usersPage.pagesize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetchingPreloadGif: state.usersPage.isFetchingPreloadGif,
        followed: state.usersPage.followed
    }
}



export const UsersContainer = connect(mapStateToProps, {
    FollowUserActionCreator,
    UnfollowUserActionCreator,
    SetUsersActionCreator,
    SetCurrentPageActionCreator,
    settotalCountPageActionCreator,
    setIsFetchingPreloadGifAC   })(UsersClassComponent)