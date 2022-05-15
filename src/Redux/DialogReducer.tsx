import {ActionsTypes} from "./State";

type StateArgumentType = {

        dialogData: Array<{ id: number, name: string }>
        messageData: Array<{ message: string, likeCount?: number }>
        newDialogMessageText:string

}

// константы
const NewDialogMessageText = 'NewDialogMessageText'
const AddDialogMessageText = 'AddDialogMessageText'



export const dialogReducer = (state:StateArgumentType, action: ActionsTypes) => {

    if (action.type === NewDialogMessageText) {


       state.newDialogMessageText = action.newDialogMessageText

        //Добавления сообщения в компоненете диалог
    } else if (action.type === AddDialogMessageText) {

        let newDialogMessageText = {message: state.newDialogMessageText, likeCount: 10 }
        state.messageData.push(newDialogMessageText)
        state.newDialogMessageText = ''

    }

    return state
}

export const NewDialogMessageTextCreator = (messageText: string)=>({type: NewDialogMessageText, newDialogMessageText: messageText})
export const AddDialogMessageTextCreator = ()=>({type: AddDialogMessageText})