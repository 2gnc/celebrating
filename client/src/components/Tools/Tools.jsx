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
            <FontAwesomeIcon icon={faInfoCircle} size='2x' className="tools__icon" />
            <FontAwesomeIcon icon={faCodeBranch} size='2x' className="tools__icon" />
            <FontAwesomeIcon icon={faTerminal} size='2x' className="tools__icon" />
        </div>
    )
};

export default Tools;
