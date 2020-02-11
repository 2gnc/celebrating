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

const Tools = ({isInfoActive, isCodeActive, isTerminalShown, isPreviewShown, onFilesClick, onTerminalClick, onPreviewClick}) => {
    return(
        <div className='tools'>
            <IconWrapper
                icon={faInfoCircle}
                onClickHandler={() => onFilesClick('README.md')}
                cls='tools__icon'
                isActive={isInfoActive}
            />
            <IconWrapper
                icon={faCode}
                onClickHandler={() => onFilesClick('celebration.js')}
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
                onClickHandler={() => onTerminalClick(isTerminalShown)}
                cls='tools__icon'
                isActive={isTerminalShown}
            />
            <IconWrapper
                icon={faTasks}
                onClickHandler={() => onPreviewClick(isPreviewShown)}
                cls='tools__icon'
                isActive={isPreviewShown}
            />
        </div>
    )
};

export default Tools;
