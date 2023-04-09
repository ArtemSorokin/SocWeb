import {ActionsTypes} from "./Redux-store";
import {userApi} from "../ServerApi/UsersServerApi";

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

export const getMeThunk = ()=>(dispatch: any)=>{
    userApi.getMe().then(
        response => {
            if(response.data.resultCode === 0 ) {
                let {email, id, login } = response.data.data

               dispatch(SetAuthorisedActionCreator(email, id, login ))
            }
        }
    )
}


export const authorizedReducer = (state = initialState, action: ActionsTypes): initialStateType => {
debugger
    if(action.type === SET_AUTHORISED) {
        debugger
        return  {...state, ...action   }
    } else return state

     }


