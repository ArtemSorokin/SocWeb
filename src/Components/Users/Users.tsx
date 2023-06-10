import React from 'react';
import s from "./Users.module.css";
import emptyAvatar from "../../images/userWithotPhoto/Avatar-PNG-Images.png";
import {followThunk, unFollowThunk, UserUnitType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";
import {userApi} from "../../ServerApi/UsersServerApi";

type usersFcComponrntPropsType = {
    users: Array<UserUnitType>
    pagesize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void
    followed: boolean
    // settoggleFollowingInProgesAC: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

export const Users = (props: usersFcComponrntPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pagesize)
    let resultPages = []

    for (let i = 1; i <= pagesCount; i++) {
        resultPages.push(i)
    }


    return (<div>
        <div>
            {resultPages.map(p => <span className={props.currentPage === p ? s.selectedPage : ''}
                                        onClick={() => {
                                            props.setCurrentPage(p)
                                        }}>{p}</span>)}
        </div>

        {props.users.map((u) => {

            return (<div key={u.id}>
      <span>
          <div>
              <NavLink to={`/profile/${u.id}`}>
              <img src={u.photoUrl == null ? emptyAvatar : u.photoUrl} className={s.avatar}/>
                  </NavLink>
          </div>

          <div>
              {u.followed ?

                  <button

                      disabled={props.followingInProgress.some((id) => id === u.id)}
                      onClick={() => {
                          props.follow(u.id)
                          // unfollowApi.getUnfollow(u.id).then(data => {
                          //
                          //     if (data.resultCode === 0) {
                          //         props.follow(u.id)
                          //     }
                          //
                          //     props.settoggleFollowingInProgesAC(false, u.id)
                          // })
                      }}> Unfollow</button> :

                  <button
                      disabled={props.followingInProgress.some((id) => id === u.id)}
                      onClick={() => {
                          props.unFollow(u.id)

                          // userApi.followApi(u.id)
                          // followApi.getFollow(u.id).then(data => {
                          //     debugger
                          //     if (data.resultCode === 0) {
                          //         props.unFollow(u.id)
                          //     }
                          //     props.settoggleFollowingInProgesAC(false, u.id)
                          //
                          // })

                      }}> Follow</button>
              }
          </div>
      </span>
                <span>
          <span>
              <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
          </span>
                </span>
            </div>)
        })}

    </div>)
}

