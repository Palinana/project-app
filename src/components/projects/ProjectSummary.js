import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project, deleteProject, color}) => {
    return (
        <div className="card z-depth-0 project-summary project-sum">
            <div className="card-content grey-text text-darken-3" style={{borderLeft: `4px solid ${project.authorColor}`}}>
                <span className="card-title">{project.title}</span>
                <p className="grey-text">Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="project-date">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;