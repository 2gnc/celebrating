import './Preview.css';
import React from 'react';

export default ({users}) => {
    return (
        <div className='preview'>
            <div className='preview__heading'>The best team ever!</div>
            <div className='preview__box'>
                {getGuessedUsers(users)}
            </div>
        </div>
    )
};

const getGuessedUsers = (users) => {
    return Object.entries(users)
        .filter((user) => user[1].username)
        .map((user) => (
            <div key={user[1].username} className='preview__user'>
                {user[1].username}
            </div>
        ))
}
