import React from 'react';

export default (users) => {
    return Object.entries(users)
        .filter((user) => user[1].username)
        .map((user) => (
            <div key={user[1].username}>
                {user[1].username}
            </div>
        ))
}
