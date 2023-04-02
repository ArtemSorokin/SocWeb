import axios from "axios";
import {retry} from "@reduxjs/toolkit/query";

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
        debugger
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    followApi  (userId:number) {

        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}







