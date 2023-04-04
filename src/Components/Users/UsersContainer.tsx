import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {
    FollowUserActionCreator, getUsers,
    SetCurrentPageActionCreator, setIsFetchingPreloadGifAC, settoggleFollowingInProgesAC,
    settotalCountPageActionCreator,
    SetUsersActionCreator,
    UnfollowUserActionCreator,
    UserUnitType
} from "../../Redux/UsersReducer";
import {Users} from "./Users";
import Preloader from '../ResForAllComponrnts/Preloader/Preloader.png'



export type mapStateToPropsType = {
    users: Array<UserUnitType>
    pagesize: number
    totalCount: number
    currentPage: number
    isFetchingPreloadGif: boolean
    followed: boolean
    followingInProgress: Array<number>
}
export type mapDispatchToPropsType = {
    FollowUserActionCreator: (userId: number) => void
    UnfollowUserActionCreator: (userId: number) => void,
    SetUsersActionCreator: (usersArray: Array<UserUnitType>) => void
    SetCurrentPageActionCreator: (pageNumber: number) => void
    settotalCountPageActionCreator: (totalCount: number) => void
    setIsFetchingPreloadGifAC: (isFetchingPreloadGif: boolean) => void
    settoggleFollowingInProgesAC: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number,   pagesize: number ) => void
}
export type UserComponentPropsType = mapStateToPropsType & mapDispatchToPropsType


export class UsersClassComponent extends React.Component<UserComponentPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pagesize)
    }

    setCurrentPage = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pagesize)
    }

    render() {

        return <>
            {this.props.isFetchingPreloadGif ? <img alt={'Wait until loading'} src={Preloader}/> : null}

            <Users

                users={this.props.users}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                pagesize={this.props.pagesize}
                follow={this.props.FollowUserActionCreator}
                unFollow={this.props.UnfollowUserActionCreator}
                setCurrentPage={this.setCurrentPage}
                followed={this.props.followed}
                settoggleFollowingInProgesAC={this.props.settoggleFollowingInProgesAC}
                followingInProgress={this.props.followingInProgress}

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
        followed: state.usersPage.followed,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export const UsersContainer = connect(mapStateToProps, {
    FollowUserActionCreator,
    UnfollowUserActionCreator,
    SetUsersActionCreator,//
    SetCurrentPageActionCreator,
    settotalCountPageActionCreator,//
    setIsFetchingPreloadGifAC,//
    settoggleFollowingInProgesAC, //
    getUsers
})(UsersClassComponent)