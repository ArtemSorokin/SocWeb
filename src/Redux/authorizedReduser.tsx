import {ActionsTypes} from "./Redux-store";

export type initialStateType = {
    data: {
        userId: number,
        email: string,
        login: string
    }
}

const SET_AUTHORISED = 'SET_AUTHORISED'


let initialState: initialStateType = {
    data: {
        userId: 0,
        email: 'Не Автаризова мэйл',
        login: 'Не Автаризова мэйл'
    }

}

export const SetAuthorisedActionCreator = (userId: number,
                                           login: string,// нежен ли объект data
                                           email: string
                                           ) => ({
                                                                type: SET_AUTHORISED,
                                                                  data: {
                                                                  userId: userId,
                                                                  email: email,
                                                                  login: login
                                                              }
                                                          })


export const authorizedReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case SET_AUTHORISED : {
            return {
                ...state,
                ...action.data
            }
        }

        default: {
            return state
        }
    }
}

