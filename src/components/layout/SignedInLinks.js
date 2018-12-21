import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return (
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/create" className="nav-link">New Project</NavLink></li>
            <li><a onClick={props.signOut} className="nav-link">Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating btn-initals">{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);