// import {ActionsTypes} from "./Redux-store";
// type SetAuthorisedActionCreatorType = {
//     type:'SET_AUTHORISED'
//     data: {
//         userId: number,
//         email: string,
//         login:string
//     }
//
// }


import {ActionsTypes} from "./Redux-store";

export type initialStateType = {
    data: {
        userId: number,
        email: string,
        login: string,
        authorised: boolean
    }
}

const SET_AUTHORISED = 'SET_AUTHORISED'


let initialState: initialStateType = {
    data: {
        email: 'Не Автаризова мэйл',
        userId: 0,
        login: 'Не Автаризова мэйл',
        authorised: false
    }

}

export const SetAuthorisedActionCreator = (
    email: string,
    userId: number,
    login: string,

) => ({
    type: SET_AUTHORISED,
    data: {
        userId: userId,
        email: email,
        login: login,
        authorised: true
    }
})


export const authorizedReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    if(action.type === SET_AUTHORISED) {
        return {
            ...state,
        ...action    /// 61
        }
    } else return state

     }


