import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {StateType, store, StoreType} from "./Redux/Redux-store";

import App from "./App";


let renderEntierThree = (state:StateType)=> {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}
                     subscribe={store.subscribe}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntierThree(store.getState())



store.subscribe (()=>{
    let state = store.getState()
    renderEntierThree(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
