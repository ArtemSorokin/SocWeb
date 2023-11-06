import React from 'react';

import {AddDialogMessageTextCreator, NewDialogMessageTextCreator} from "../../Redux/DialogReducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import { RootStateType} from "../../Redux/Redux-store";
import {useNavigate} from "react-router-dom";
import {ProfileClassContainer} from "../Profile/ProfileContainer";

// type DialogsContainerPropsType = {
//     dialogPage: {
//         dialogData: Array<{ id: number, name: string }>
//         messageData: Array<{ message: string, likeCount?: number }>
//         newDialogMessageText: string
//     }
//     dispatch: (action: any) => void
// }

let AuthRedirectComponent = (props: any) => {
    let redirect = useNavigate()
    if(!props.auth){
        redirect('/login')
    }
    return <Dialogs {...props}/>
}

let mapStateToProps = (state:RootStateType)=> {
    return {
        dialogdata: state.dialogReducer.dialogData,
        newDialogMessageText: state.dialogReducer.newDialogMessageText,
        messageData: state.dialogReducer.messageData,
        auth: state.authorized.data.authorised
    }
}

let mapDispatchToProps = (dispatch: any)=> {      // type
    return{
        AddDialogMessageText: ()=> {    dispatch(AddDialogMessageTextCreator()) },
        ChangeDialogMessageText: (text: string)=>{  dispatch(NewDialogMessageTextCreator(text))}
    }

}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
