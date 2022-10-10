import React from 'react';
import s from './Users.module.css'
import {UserComponentPropsType} from "./UsersContainer";
import axios from 'axios';
import emptyAvatar from '../../images/userWithotPhoto/Avatar-PNG-Images.png';


export class UsersClassComponent extends React.Component<UserComponentPropsType> {

    componentDidMount() {
        // запрос списка юзеров
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (<div>

            {this.props.users.map((u) => {

                return (<div key={u.id}>
      <span>
          <div>
              <img src={u.photoUrl == null ? emptyAvatar : u.photoUrl} className={s.avatar}/>
          </div>
          <div>
              {u.followed ?
                  <button onClick={() => {
                      this.props.unFollow(u.id)
                  }}> Follow</button>
                  : <button onClick={() => {
                      this.props.follow(u.id)
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

}