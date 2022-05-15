import React  from 'react';
import {NavLink} from 'react-router-dom';
import s from './NavBar.module.css'



export const NavBar = () => {
const active = (navData: { isActive: any; }) => navData.isActive ? s.active : s.Item

    return <nav className={s.Navigation}>
        <div className={s.Item}>
            <NavLink to='/profile' className = {active}>Profile</NavLink>
        </div>

        <div className={s.Item}>
            <NavLink to='/news' className = {active}>News</NavLink>
        </div>
        <div className={s.Item}>
            <NavLink to='/dialogs' className = {active}>Dialogs</NavLink>
        </div>
        <div className={s.Item}>
            <NavLink to='/music' className = {active}>Music</NavLink>
        </div>
        <div className={s.Item}>
            <NavLink to='/settings' className = {active}>Settings</NavLink>
        </div>
    </nav>
}