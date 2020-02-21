import './Preview.css';
import React from 'react';
import pic from './img';

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
    const team = Object.entries(users)
        .filter((user) => user[1].username)
        .map((user) => {
            const style = {
                backgroundImage: 'url(' + pic[user[1].fact.factId.substring(0,2)] + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }
            return  (
                <div key={user[1].username} className='preview__user' style={style} />
            )
        });
    if (team.length === 12) {
        team.push(<div key={'tgnc'} className='preview__user' style={{
            backgroundImage: 'url(' + pic['13'] + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} />);
        team.push(<div key={'bliz'} className='preview__user' style={{
            backgroundImage: 'url(' + pic['14'] + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} />);
    }
    return team;
}
