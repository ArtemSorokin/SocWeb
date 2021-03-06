import {ActionsTypes} from "./Redux-store";
import {debug} from "util";

type StateArgumentType = {

        postData: Array<{ message: string, likes: number }>,
        newPostText: string

}


// константы
const UpdatePostText = 'UpdatePostText'
const AddPost = 'AddPost'

let initialState = {
    postData: [
        {message:'Privet kak dela', likes: 10 },
        {message:'Chto delarch', likes: 15 },
        {message:'Kto ti', likes: 14 },
        {message:'Kak tipizirovat', likes: 5 }
    ],
        newPostText:'it-kamasutra'
}

export const UpdatePostTextActionCreator= (text: string)=> ({type: UpdatePostText, newPostText: text})
export const AddPostActionCreator = ()=>(  {type: AddPost})


export const profileReducer = (state:StateArgumentType = initialState, action: ActionsTypes): StateArgumentType => {

    if(action.type === AddPost) {
        let newPost: {message: string, likes: number} = {
            message: state.newPostText,
            likes:0
        }

        return {...state, postData: [...state.postData, newPost], newPostText: ''}

    } else if (action.type === UpdatePostText) {

        return  {...state, newPostText: action.newPostText}
    }
    return state
}

