import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/Redux-store";

import App from "./App";
import {Provider} from "react-redux";



// let renderEntierThree = (props: RootState) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider
                store={store}>
            <App
                 // subscribe={store.subscribe}   /// xnj
            />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }
// renderEntierThree(store.getState())


// store.subscribe(() => {
//     let state = store.getState()
//     renderEntierThree(state)
// })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
