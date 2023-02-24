import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'd60cb8da-f90e-49ec-b832-2b8ab8205bad'}
})


export const userApi = {
    getUsers (currentPage:number, pagesize:number) {

        return (
            instance.get(`users?page=${currentPage}&count=${pagesize}`)
                .then(response => response.data)
        )
    }
}
export const unfollowApi = {
    getUnfollow (userId:number) {
        debugger
        return (
            instance.delete(`follow/${userId}`
            ).then(response => response.data)
        )
    }
}

export const followApi = {
    getFollow (userId:number) {
        return (
            instance.post(`follow/${userId}`
            ).then(response => response.data)
        )
    }
}




