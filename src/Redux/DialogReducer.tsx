import {ActionsTypes} from "./Redux-store";

export type StateArgumentType = {  // кспорт убрать

        dialogData: Array<{ id: number, name: string }>
        messageData: Array<{ message: string, likeCount?: number }>
        newDialogMessageText:string

}

// константы
const NewDialogMessageText = 'NewDialogMessageText'
const AddDialogMessageText = 'AddDialogMessageText'

let dialogInitialState =  {
    dialogData: [
        {id: 1, name: 'Name1'},
        {id: 2, name: 'Name3'},
        {id: 3, name: 'Name3'},
        {id:4 , name: 'Name3'},
        {id: 5, name: 'Name3'}
    ],

        messageData: [
        { message: 'Day', likeCount: 10},
        { message: 'Night', likeCount: 12},
        { message: 'Jojo', likeCount: 15},
        { message: 'Jojo', likeCount: 15},
        { message: 'Jojo', likeCount: 15}
    ],
        newDialogMessageText: '',
}


export const dialogReducer = (state:StateArgumentType = dialogInitialState, action: ActionsTypes):StateArgumentType => {

    if (action.type === NewDialogMessageText) {
         let copyState = {...state}

        copyState.newDialogMessageText = action.newDialogMessageText

        return copyState

        //Добавления сообщения в компоненете диалог
    } else if (action.type === AddDialogMessageText) {

        let newDialogMessageText = {message: state.newDialogMessageText, likeCount: 10 }

        let copyState = {...state}
        copyState.messageData = [...state.messageData]

        copyState.messageData.push(newDialogMessageText)
        copyState.newDialogMessageText = ''
        return copyState
    }

    return state
}

export const NewDialogMessageTextCreator = (messageText: string)=>({type: NewDialogMessageText, newDialogMessageText: messageText})
export const AddDialogMessageTextCreator = ()=>({type: AddDialogMessageText})