import React from 'react';
import s from './Users.module.css'
import {UserComponentPropsType} from "./UsersContainer";
import axios from 'axios';
import emptyAvatar from '../../images/userWithotPhoto/Avatar-PNG-Images.png';
import {current} from "@reduxjs/toolkit";


export class UsersClassComponent extends React.Component<UserComponentPropsType> {

    componentDidMount() {
        // запрос списка юзеров
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.settotalCount(response.data.totalCount)
        })
    }

    setCurrentPage = (currentPage:number)=>{
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pagesize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        let pagesCount = Math.ceil(this.props.totalCount/this.props.pagesize)
        let resultPages = []

        for(let i=1 ; i <= pagesCount; i++) {
            resultPages.push(i)
        }



        return (<div>
            <div>
                {resultPages.map(p=> <span className={this.props.currentPage === p? s.selectedPage :  ''}
                                           onClick={()=>{this.setCurrentPage(p)}}>{p}</span>)}
                {/*<span className={s.selectedPage}>1</span>*/}
                {/*<span>2</span>*/}
                {/*<span>3</span>*/}
                {/*<span>4</span>*/}
                {/*<span>5</span>*/}
            </div>

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