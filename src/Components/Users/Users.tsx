import React from 'react';
import s from "./Users.module.css";
import emptyAvatar from "../../images/userWithotPhoto/Avatar-PNG-Images.png";
import {UserUnitType} from "../../Redux/UsersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type usersFcComponrntPropsType = {
    users: Array<UserUnitType>
    pagesize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void
    followed: boolean
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
debugger
            return (<div key={u.id}>
      <span>
          <div>
              <NavLink to={`/profile/${u.id}`}>
              <img src={u.photoUrl == null ? emptyAvatar : u.photoUrl} className={s.avatar}/>
                  </NavLink>
          </div>

          <div>
              {u.followed ?

                  <button onClick={() => {

                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { withCredentials: true,
                          headers: {'API-KEY': 'd60cb8da-f90e-49ec-b832-2b8ab8205bad'}
                      } ).then(response => {

                          if(response.data.resultCode === 0 ) {
                              props.follow(u.id)

                          }
                      })
                  }}> Unfollow</button> : <button onClick={() => {

                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { },{withCredentials: true,
                          headers: {'API-KEY': 'd60cb8da-f90e-49ec-b832-2b8ab8205bad'}
                      }).then(response => {
                          debugger
                          if(response.data.resultCode === 0 ) {
                              props.unFollow(u.id)

                          }
                      })

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

