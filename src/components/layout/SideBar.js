import React, { Component } from 'react';
import SidebarSignInLinks from './SidebarSignInLinks';
import SidebarSignOutLinks from './SidebarSignOutLinks';
import { connect } from 'react-redux';

class Sidebar extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        const { auth, profile } = this.props;
        const links = auth.uid ? <SidebarSignInLinks profile={profile}/> : <SidebarSignOutLinks/>;

        return (
            <div className="side-drawer hide-on-large-only">
                <div className="btn-close" onClick={this.props.onClick}><i className="material-icons right">close</i></div>
                <div>
                    {links}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Sidebar);