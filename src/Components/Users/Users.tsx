import React from 'react';
import {
    UsersInitStateType
} from "../../Redux/UsersReducer";
import s from './Users.module.css'
import {UserComponentPropsType} from "./UsersContainer";
import axios from 'axios'

// type UserUnit = {id: number, photoUrl: string, followed: boolean, fullname: string, status: string, location:{city: string, country: string} }
//
// type UsersPropsType = {
//     users: Array<UserUnit>
//     follow: (userId: number)=> void,
//     unFollow: (userId: number)=> void,
//     setUsers: (usersArray: UsersInitStateType) => void
// }


export const Users = (props: UserComponentPropsType) => {

    if(props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
            debugger
            props.setUsers(response.data.items)
        })
    }



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


// props.setUsers(  [
//     {id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/7eda9d4eada2e1aa3fd2abb866360633.jpg', followed: true, fullname: 'Jotaro', status:'Travel to Egypt', location:{city: 'Budapecht', country:'Cracogia'}},
//     {id: 2, photoUrl: 'https://www.meme-arsenal.com/memes/7eda9d4eada2e1aa3fd2abb866360633.jpg', followed: false, fullname: 'Polnaref', status:'Travel too', location:{city: 'Budapecht', country:'Cracogia'}},
//     {id: 3, photoUrl: 'https://www.meme-arsenal.com/memes/7eda9d4eada2e1aa3fd2abb866360633.jpg', followed: true, fullname: 'Kakeyn', status:'Travel too', location:{city: 'Budapecht', country:'Cracogia'}}
// ])