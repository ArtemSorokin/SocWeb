import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {NotFound} from "./Components/NotFound/NotFound";
import {FriendsProfile} from "./Components/FriedsProfile/FriendsProfile";
import HeaderContainer from "./Components/Header/HeaderContainer";


function App() {


    return (
        <BrowserRouter>
            <div className="App-Wraper">
                <HeaderContainer />
                <NavBar/>

                <div className='App-Wraper-content'>

                    <Routes>
                            <Route path="/" element={<Navigate to={'/profile'} />}/>
                            <Route path="/dialogs" element={<DialogsContainer />}/>
                        <Route path="/profile" element={<ProfileContainer />}/>
                        <Route path="/profile/:userId" element={<ProfileContainer />}/>
                        {/*<Route path="/profile/:userId" element={<FriendsProfile />}/>*/}
                        <Route path ="/users" element={<UsersContainer/>}/>
                        <Route path='*' element={NotFound}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
