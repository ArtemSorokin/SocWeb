import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {AddDialogMessageTextCreator, NewDialogMessageTextCreator} from "../../Redux/DialogReducer";
import {Dialogs} from "./Dialogs";
import {ReactContextForApp} from "../../ReactContext";

type DialogsContainerPropsType = {
    dialogPage: {
        dialogData: Array<{ id: number, name: string }>
        messageData: Array<{ message: string, likeCount?: number }>
        newDialogMessageText: string
    }
    dispatch: (action: any) => void
}

export const DialogsContainer = () => {


// map
//     let dialogElements= props.dialogPage.dialogData.map( d =>   <DialogItem id={d.id} name={d.name}/> )
//     let messageElement = props.dialogPage.messageData.map( m => <MessageItem message={m.message} likeCount={m.likeCount}/>)


    return (
        <ReactContextForApp.Consumer>
            { store=> {
                let addMessageFromUser = () => {

                    // @ts-ignore
                    store.dispatch(AddDialogMessageTextCreator())
                }

                let onChangeMessageFromUser = (text: string) => {
                    // @ts-ignore
                    store.dispatch(NewDialogMessageTextCreator(text))
                }


                return ( <Dialogs dialogdata={store.getState().dialogReducer.dialogData}
                                  AddDialogMessageText={addMessageFromUser}
                                  ChangeDialogMessageText={onChangeMessageFromUser}
                                  newDialogMessageText={store.getState().dialogReducer.newDialogMessageText}
                                  messageData={store.getState().dialogReducer.messageData}

                />)
               }
               }

        </ReactContextForApp.Consumer>
            )
}
