import React from 'react';
import './Tools.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCodeBranch,
    faInfoCircle,
    faTerminal
} from '@fortawesome/free-solid-svg-icons';


const Tools = () => {
    return(
        <div className='tools'>
            <FontAwesomeIcon icon={faCodeBranch} size='2x' />
            <FontAwesomeIcon icon={faInfoCircle} size='2x' />
            <FontAwesomeIcon icon={faTerminal} size='2x' />
        </div>
    )
};

export default Tools;
