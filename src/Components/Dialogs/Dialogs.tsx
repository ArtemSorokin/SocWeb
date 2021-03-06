import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";

type DialogsPropsType ={
dialogdata: Array<{ id: number, name: string }>
    messageData: Array<{ message: string, likeCount?: number }>
    AddDialogMessageText: ()=>void
    ChangeDialogMessageText:(newDialogMessageText: string)=> void
    newDialogMessageText: string

}

export const Dialogs = (props: DialogsPropsType ) => {


// map
    let dialogElements= props.dialogdata.map( d =>   <DialogItem id={d.id} name={d.name}/> )
    let messageElement = props.messageData.map( m => <MessageItem message={m.message} likeCount={m.likeCount}/>)


    let addMessageFromUser = () => {

        props.AddDialogMessageText()
    }
    let onChangeMessageFromUser = (e:ChangeEvent<HTMLTextAreaElement>)=> {

        let newDialogMessageText =  e.currentTarget.value
        props.ChangeDialogMessageText(newDialogMessageText)

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
                {<textarea  value={props.newDialogMessageText} onChange={onChangeMessageFromUser} />}
            </div>
            <div>
                <button onClick={addMessageFromUser}>F</button>
            </div>

        </div>
    )
}
