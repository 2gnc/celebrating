import React from 'react';
import './Fact.css';

export default ({factId, text, id}) => {
    return (
        <div className='fact'>
            {text}
            <input type="text" className='fact__input' />
        </div>
    )
};
