import React from 'react';

import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppDispatch, AppStateType, RootState} from "./Redux/Redux-store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


type AppPropsType = {

    state: RootState
    dispatch: AppDispatch
    // subscribe: (listener: () => void) => Unsubscribe
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="App-Wraper">
                <Header/>
                <NavBar/>

                <div className='App-Wraper-content'>

                    {/*<Route path='/dialogs' component={Dialogs} />*/}

                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer dialogPage={props.state.dialogReducer}
                                                                 dispatch={props.dispatch}/>}/>
                        <Route path="/profile" element={<Profile profilePage={props.state.profileReducer}
                                                                 dispatch={props.dispatch}
                        />}/>
                        {/*<Route path="/messages" element={<Profile />} />*/}
                        {/*<Route path="/news" element={<Profile />} />*/}
                        {/*<Route path="/music" element={<Profile />} />*/}
                        {/*<Route path="/settings" element={<Profile />} />*/}
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
