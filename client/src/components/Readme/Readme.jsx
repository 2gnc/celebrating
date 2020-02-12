import React from 'react';
import './Readme.css';
import texts from './texts.js'

const Readme = () => {
    return (
        <div className='readme'>
            {getContent()}
        </div>
    )
};

function getContent() {
    return texts.map((text, i) => {
        return text !== '' ? (
            <div key={text}>
                {text}
            </div>
        ) : <br key={i} />
    })
}

export default Readme;
