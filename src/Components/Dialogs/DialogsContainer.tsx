import React from 'react';

import {AddDialogMessageTextCreator, NewDialogMessageTextCreator} from "../../Redux/DialogReducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {RootState} from "../../Redux/Redux-store";

// type DialogsContainerPropsType = {
//     dialogPage: {
//         dialogData: Array<{ id: number, name: string }>
//         messageData: Array<{ message: string, likeCount?: number }>
//         newDialogMessageText: string
//     }
//     dispatch: (action: any) => void
// }



let mapStateToProps = (state:RootState)=> {
    return {
        dialogdata: state.dialogReducer.dialogData,
        newDialogMessageText: state.dialogReducer.newDialogMessageText,
        messageData: state.dialogReducer.messageData
    }
}

let mapDispatchToProps = (dispatch: any)=> {      // type
    return{
        AddDialogMessageText: ()=> {    dispatch(AddDialogMessageTextCreator()) },
        ChangeDialogMessageText: (text: string)=>{  dispatch(NewDialogMessageTextCreator(text))}
    }

}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
