import React from 'react';

import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StoreType} from "./Redux/State";





function App(props: StoreType) {

    return (
        <BrowserRouter>
        <div className="App-Wraper">
            <Header/>
            <NavBar/>

            <div className='App-Wraper-content'>

            {/*<Route path='/dialogs' component={Dialogs} />*/}

           <Routes>
               <Route path="/dialogs" element={<Dialogs dialogPage={props.state.dialogPage} dispatch={props.dispatch} />} />
               <Route path="/profile" element={<Profile profilePage={props.state.profilePage}
                                                        dispatch={props.dispatch}
                                                         />} />
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
