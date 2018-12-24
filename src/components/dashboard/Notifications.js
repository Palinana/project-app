import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card z-depth-0 notifications">
                <div className="card-content notifications__content">
                    <span className="card-title white-text">Notifications</span>
                    <ul className="online-users users-list">
                        { notifications && notifications.map(item => {
                            return <li className="grey-text" key={item.id}>
                                <span className="online-user__name">{item.user} </span>
                                <span>{item.content}</span>
                                <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications