import {ActionsTypes} from "./State";

type StateArgumentType = {

        postData: Array<{ message: string, likes: number }>,
        newPostText: string


}


// константы
const UpdatePostText = 'UpdatePostText'
const AddPost = 'AddPost'

export const UpdatePostTextActionCreator= (text: string)=> ({type: UpdatePostText, newPostText: text})
export const AddPostActionCreator = ()=>({type: AddPost})



export const profileReducer = (state:StateArgumentType, action: ActionsTypes) => {

    if(action.type === AddPost) {
        let newPost: {message: string, likes: number} = {
            message: state.newPostText,
            likes:0

        }
        state.postData.push(newPost)
        state.newPostText = ''

    } else if (action.type === UpdatePostText) {
        state.newPostText = action.newPostText


    }
    return state
}