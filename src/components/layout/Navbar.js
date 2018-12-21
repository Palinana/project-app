import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import Sidebar from '../layout/SideBar';

class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false
        }
        this.toggleClick = this.toggleClick.bind(this);
    }
    toggleClick() {
        this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen })
    }

    render(){
    const { auth, profile } = this.props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    const sideLinks = this.state.sideDrawerOpen ? <Sidebar onClick={this.toggleClick}/> : null;

    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">ProjectApp</Link>
                <a className="sidenav-trigger"  data-target="slide-out" onClick={this.toggleClick}>
                    <i className="material-icons">menu</i>
                </a>
                {links}
            </div>
            {sideLinks}
        </nav>
    )
}
}
const mapStateToProps = (state) => {
    // console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);