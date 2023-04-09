import React from 'react';
import './App.css';

import {NavBar} from "./Components/NavBar/NavBar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {NotFound} from "./Components/NotFound/NotFound";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";


function App() {


    return (
        <BrowserRouter>
            <div className="App-Wraper">
                <HeaderContainer />
                <NavBar/>

                <div className='App-Wraper-content'>

                    <Routes>
                            <Route path="/" element={<Navigate to={'/profile'} />}/>
                            <Route path="/dialogs" element={<DialogsContainer /> }/>
                        <Route path="/profile" element={<ProfileContainer />}/>
                        <Route path="/profile/:userId" element={<ProfileContainer />}/>
                        {/*<Route path="/profile/:userId" element={<FriendsProfile />}/>*/}
                        <Route path ="/users" element={<UsersContainer/>}/>
                        <Route path ="/login" element={<Login/>}/>
                        <Route path='/*' element={<NotFound/>}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
