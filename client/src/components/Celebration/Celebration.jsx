import React from 'react';
import './Celebration.css';
import Fact from '../Fact/Fact';

export default ({users, order}) => {
    console.log(users, order)
    return (
        <div className='celebration'>
            {!order.length && <span className='celebration__loading'>Loading...</span>}
            {
                order.map((num) => {
                    return (
                        <Fact
                            key={num}
                            factId={users[num].fact.factId}
                            text={users[num].fact.factText}
                            id={num}
                        />
                    )
                })
            }
        </div>
    )
};
