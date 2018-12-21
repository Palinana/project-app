import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to='/sign-in' /> 

    if(project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0 project-sum">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title white-text">Project title - {project.title}</span>
                        <p className="white-text">{project.content}</p>
                    </div>
                    <div className="card-action">
                        <div className="grey-text">Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div className="project-date">{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }    
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
      collection: 'projects'
    }])
)(ProjectDetails);