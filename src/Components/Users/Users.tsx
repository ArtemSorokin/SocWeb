import React from 'react';
import {
    UsersInitStateType
} from "../../Redux/UsersReducer";
import s from './Users.module.css'

type UserUnit = {id: number, photoUrl: string, followed: boolean, fullname: string, status: string, location:{city: string, country: string} }

type UsersPropsType = {
    users: Array<UserUnit>
    follow: (userId: number)=> void,
    unFollow: (userId: number)=> void,
    setUsers: (usersArray: UsersInitStateType) => void
}


export const Users = (props: UsersPropsType) => {


    return (<div>

        {props.users.map((u) => {

            return (<div key={u.id}>
      <span>
          <div>
              <img src={u.photoUrl} className={s.avatar}/>
          </div>
          <div>
              {u.followed ?
                  <button onClick={() => {props.unFollow(u.id) }}> Follow</button>
                  : <button onClick={() => {
                       props.follow(u.id)
                  }}> Unfollow</button>}
          </div>
      </span>
                <span>
          <span>
              <div>{u.fullname}</div>
            <div>{u.status}</div>
          </span>
          <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
          </span>
                </span>
            </div>)
        })}

    </div>)
}
