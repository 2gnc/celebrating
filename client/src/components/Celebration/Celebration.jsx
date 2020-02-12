import React from 'react';
import './Celebration.css';
import Fact from '../Fact/Fact';

export default ({facts}) => {
    return (
        <div className='celebration'>
            {
                facts.map((fact) => (
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
