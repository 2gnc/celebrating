import React from 'react';
import './Celebration.css';
import Fact from '../Fact/Fact';

export default ({users, order}) => {
    return (
        <div className='celebration'>
            {
                users.map((fact) => ( // TODO другая структура данных, определенный порядок тут надо переделать
                    <Fact
                        key={fact.factId}
                        factId={fact.factId}
                        text={fact.factText}
                        id={fact.id}
                    />
                ))
            }
        </div>
    )
};
