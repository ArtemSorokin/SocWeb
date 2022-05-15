import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {AddDialogMessageTextCreator, NewDialogMessageTextCreator} from "../../Redux/DialogReducer";

type DialogsPropsType ={
    dialogPage: {
        dialogData: Array<{ id: number, name: string }>
        messageData: Array<{ message: string, likeCount?: number }>
        newDialogMessageText:string
    }

    dispatch:(action:any)=>void
}

export const Dialogs = (props: DialogsPropsType ) => {


// map
    let dialogElements= props.dialogPage.dialogData.map( d =>   <DialogItem id={d.id} name={d.name}/> )
    let messageElement = props.dialogPage.messageData.map( m => <MessageItem message={m.message} likeCount={m.likeCount}/>)


    let addMessageFromUser = () => {
      debugger
        props.dispatch(AddDialogMessageTextCreator())
    }
    let onChangeMessageFromUser = (e:ChangeEvent<HTMLTextAreaElement>)=> {

        let newDialogMessageText =  e.currentTarget.value
        props.dispatch(NewDialogMessageTextCreator(newDialogMessageText))

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElements}
            </div>


            <div className={s.messages}>
                {messageElement}
            </div>
            <div>
                {<textarea  value={props.dialogPage.newDialogMessageText} onChange={onChangeMessageFromUser} />}
            </div>
            <div>
                <button onClick={addMessageFromUser}>F</button>
            </div>

        </div>
    )
}
