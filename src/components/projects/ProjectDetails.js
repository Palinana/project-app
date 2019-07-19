import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { deleteProject, editProject } from '../../store/actions/projectActions';

class ProjectDetails extends Component {
    state = {
        title: '',
        content: '',
        editClick: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: this.props.id,
            title: this.state.title,
            content: this.state.content
        }

        this.props.editProject(data);
        this.setState({ editClick: !this.state.editClick });
    }

    showEdit() {
        this.setState({ editClick: !this.state.editClick });
        this.setState({ title: this.props.project.title });
        this.setState({ content: this.props.project.content });
    }

    delete = (id) => {
        this.props.deleteProject(id);
        this.props.history.push('/');
    }

    render() {

        const { project, auth, id } = this.props;
        const edit = this.state.editClick;
        if (!auth.uid) return <Redirect to='/sign-in' /> 

        if(project) {
            return (
                <div className="container section project-details">
                    <div className="card z-depth-0 project-sum">
                        { !edit ? 
                            <div className="card-content grey-text text-darken-3" id="project-content">
                                { project.authorId === auth.uid ? 
                                    <span className="card-title project-title">
                                        {project.title}
                                        <i className="material-icons right delete" onClick={this.delete.bind(this, id)}>close</i>
                                        <i className="material-icons right edit" onClick={this.showEdit.bind(this)}>edit</i>
                                    </span> :
                                    <span className="card-title project-title">{project.title}</span>
                                }
                                <p className="project-summary__title">{project.content}</p>
                            </div> : 

                            <div className="card-content grey-text text-darken-3" >
                                <form className="edit-form" onSubmit={this.handleSubmit}>
                                    <div className="input-field">
                                        <input type="text" id='title' onChange={this.handleChange} defaultValue={this.state.title} required/>
                                    </div>
                                    <div className="input-field">
                                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} defaultValue={this.state.content} required></textarea>
                                    </div>
                                    <div className="input-field">
                                        <button className="btn btn-form">Edit</button>
                                    </div>
                                </form>
                            </div>
                        }

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
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        id: id,
        project: project,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject (id) {
            dispatch(deleteProject(id))
        },
        editProject (id) {
            dispatch(editProject(id))
        }
    }
  }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
      collection: 'projects'
    }])
)(ProjectDetails);