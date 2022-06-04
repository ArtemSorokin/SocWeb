import React from "react";
import {AppDispatch, RootState, store, StoreType} from "./Redux/Redux-store";
import App from "./App";
import {EmptyObject} from "@reduxjs/toolkit";
import {StateArgumentType} from "./Redux/DialogReducer";


export const ReactContextForApp = React.createContext({} as StoreType)
type PropviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: PropviderType)=> {
    return ( <ReactContextForApp.Provider value={props.store}>
            {props.children}
            </ReactContextForApp.Provider> )
}
