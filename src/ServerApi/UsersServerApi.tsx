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
    },
    //
    unfollowApi  (userId: number) {

        return instance.delete(`follow/${userId}`)
    },
    followApi  (userId:number) {

        return instance.post(`follow/${userId}`)
    },
    getProfile(userId: string | undefined) {

        return  instance.get(`profile/${userId}`)

    },
    getMe() {
        return instance.get(`auth/me` )
    }

}







