import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SidebarSignInLinks = (props) => {
    return (
        <ul className="side-links">
            <li><NavLink to="/" className="btn btn-floating btn-initals-sidebar">{props.profile.initials}</NavLink></li>
            <li><NavLink to="/create" >New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SidebarSignInLinks);