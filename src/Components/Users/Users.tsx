import React from 'react';
import {UsersInitStateType} from "../../Redux/UsersReducer";


export const Users = (props: UsersInitStateType) => {
    return (
        <div>
            {props.users.map((u) => {
                <div key={u.id}>
      <span>
          <div>
              <img src={u.photoUrl}/>
          </div>
          <div>
              <button/>
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
                </div>
            })}
        </div>
    )
}
