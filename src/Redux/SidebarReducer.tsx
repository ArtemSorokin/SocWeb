import {ActionsTypes} from "./State";

type StateArgumentType = {
    dialogPage: {
        dialogData: Array<{ id: number, name: string }>
        messageData: Array<{ message: string, likeCount?: number }>
        newDialogMessageText:string
    }
}




export const sidebarReducer = (state:StateArgumentType, action: ActionsTypes) => {



    return state
}