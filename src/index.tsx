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

// @ts-ignore
window.store = store
reportWebVitals();
