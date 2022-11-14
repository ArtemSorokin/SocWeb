import React from 'react';
import s from "./Users.module.css";
import emptyAvatar from "../../images/userWithotPhoto/Avatar-PNG-Images.png";
import {UserUnitType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";

type usersFcComponrntPropsType = {
    users: Array<UserUnitType>
    pagesize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void
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
              <NavLink to='/profile'>
              <img src={u.photoUrl == null ? emptyAvatar : u.photoUrl} className={s.avatar}/>
                  </NavLink>
          </div>
          <div>
              {u.followed ?
                  <button onClick={() => {
                      props.unFollow(u.id)
                  }}> Follow</button>
                  : <button onClick={() => {
                      props.follow(u.id)
                  }}> Unfollow</button>}
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

