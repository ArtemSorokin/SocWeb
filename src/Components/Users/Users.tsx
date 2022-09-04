import React from 'react';
import {
    UsersInitStateType
} from "../../Redux/UsersReducer";
import s from './Users.module.css'
import {UserComponentPropsType} from "./UsersContainer";
import axios from 'axios';
import emptyAvatar from '../../images/userWithotPhoto/Avatar-PNG-Images.png';


const Users = (props: UserComponentPropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }
    }


    return (<div>
        <button onClick={getUsers}>Show USers</button>

        {props.users.map((u) => {

            return (<div key={u.id}>
      <span>
          <div>
              <img src={u.photoUrl == null ? emptyAvatar : u.photoUrl} className={s.avatar}/>
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


