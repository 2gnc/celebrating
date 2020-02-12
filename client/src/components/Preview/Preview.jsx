import React from 'react';
import './Preview.css';

export default ({users}) => {
    return (
        <div className='preview'>
            {
                Object.entries(users)
                    .filter((user) => user[1].username)
                    .map((user) => <div key={user[1].username}>{user[1].username}</div>
                    )
            }
        </div>
    )
};
