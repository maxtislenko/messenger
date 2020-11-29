import React from 'react';
import classNames from 'classnames';

const Message = ({ authorId, name, text, timestamp, userId }) => {
    const [hours, minutes] = [new Date(timestamp).getHours(), new Date(timestamp).getMinutes()]
    return (
        <div className={classNames('message d-flex mb-2', {'own': authorId === userId })}>
            <div className="message-wrap shadow-sm w-50 p-2 rounded-lg">
                <div className="message-text">{text}</div>
                <div className="message-timestamp">{name} {hours}:{minutes}</div>
            </div>
        </div>
    );
};

export default Message;
