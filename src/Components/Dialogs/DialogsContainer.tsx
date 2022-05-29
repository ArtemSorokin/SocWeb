import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {AddDialogMessageTextCreator, NewDialogMessageTextCreator} from "../../Redux/DialogReducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    dialogPage: {
        dialogData: Array<{ id: number, name: string }>
        messageData: Array<{ message: string, likeCount?: number }>
        newDialogMessageText: string
    }
    dispatch: (action: any) => void
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {


// map
//     let dialogElements= props.dialogPage.dialogData.map( d =>   <DialogItem id={d.id} name={d.name}/> )
//     let messageElement = props.dialogPage.messageData.map( m => <MessageItem message={m.message} likeCount={m.likeCount}/>)

    let addMessageFromUser = () => {

        props.dispatch(AddDialogMessageTextCreator())
    }

    let onChangeMessageFromUser = (text: string) => {
        props.dispatch(NewDialogMessageTextCreator(text))
    }

    return <Dialogs dialogdata={props.dialogPage.dialogData} AddDialogMessageText={addMessageFromUser}
                    ChangeDialogMessageText={onChangeMessageFromUser} newDialogMessageText={props.dialogPage.newDialogMessageText}
                    messageData={props.dialogPage.messageData}

    />
}
