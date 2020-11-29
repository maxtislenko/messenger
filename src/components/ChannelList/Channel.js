import React from 'react';
import classNames from 'classnames';

const Channel = ({ user, active, onClick }) => {
    return (
        <li onClick={onClick} className={classNames(
            "list-group-item list-group-item-action text-truncate",
            {
                "active": active
            }
        )}>
            {user.name}
        </li>
    );
};

export default Channel;
