import React from 'react';
import './Tools.css';
import {
    faCodeBranch,
    faInfoCircle,
    faTerminal,
    faTasks,
    faCode
} from '@fortawesome/free-solid-svg-icons';
import IconWrapper from '../IconWrapper/IconWrapper';

const Tools = ({isInfoActive, isCodeActive, onInfoClick}) => {
    return(
        <div className='tools'>
            <IconWrapper
                icon={faInfoCircle}
                onClickHandler={() => onInfoClick('README.md')}
                cls='tools__icon'
                isActive={isInfoActive}
            />
            <IconWrapper
                icon={faCode}
                onClickHandler={() => onInfoClick('celebration.js')}
                cls='tools__icon'
                isActive={isCodeActive}
            />
            <IconWrapper
                icon={faCodeBranch}
                onClickHandler={() => console.log('click')}
                cls='tools__icon'
            />
            <IconWrapper
                icon={faTerminal}
                onClickHandler={() => console.log('click')}
                cls='tools__icon'
                isActive
            />
            <IconWrapper
                icon={faTasks}
                onClickHandler={() => console.log('click')}
                cls='tools__icon'
                isActive
            />
        </div>
    )
};

export default Tools;
