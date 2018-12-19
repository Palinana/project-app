import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary project-sum">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title white-text">{project.title}</span>
                <p>{project.content}</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    )
}

export default ProjectSummary;