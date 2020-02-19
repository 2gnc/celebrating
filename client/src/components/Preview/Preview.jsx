import './Preview.css';
import React from 'react';
import getGuessedUsers from '../../helpers/getGuessedUsers';

export default ({users}) => {
    return (
        <div className='preview'>
            {
                getGuessedUsers(users)
            }
        </div>
    )
};
