import React from 'react';
import s from './../Dialogs.module.css'

import {NavLink} from "react-router-dom";


export type MessagePropsType = {
    message: string
    likeCount?: number
}



 export const MessageItem = (props:MessagePropsType)=> {
    return (
        <div className={s.message}> {props.message} </div>
    )

}


