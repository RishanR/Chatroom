import React from 'react';

import './users.css';

const Users = (props) => {
    return(
        <div>
            {props.usersRoom.map(users => (
                <div className="userContainer">
                    <div className="userOnlineIcon"></div>
                    {users.name}
                </div>
            ))}
        </div>
    );
}

export default Users;
