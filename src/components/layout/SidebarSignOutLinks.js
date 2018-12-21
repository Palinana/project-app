import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarSignOutLinks = () => {
    return (
        <ul className="side-links">
            <li><NavLink to='/sign-up'>Signup</NavLink></li>
            <li><NavLink to='/sign-in'>Login</NavLink></li>
        </ul>
    )
}

export default SidebarSignOutLinks;