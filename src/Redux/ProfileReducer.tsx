import {ActionsTypes} from "./Store";

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
export const AddPostActionCreator = ()=>({type: AddPost})



export const profileReducer = (state:StateArgumentType = initialState, action: ActionsTypes) => {
    debugger

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