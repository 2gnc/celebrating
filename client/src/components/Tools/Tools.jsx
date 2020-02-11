import React from 'react';
import './Tools.css';
import {
    faCodeBranch,
    faInfoCircle,
    faTerminal,
    faImages,
    faCode
} from '@fortawesome/free-solid-svg-icons';
import IconWrapper from '../IconWrapper/IconWrapper';

const Tools = ({isInfoActive, isCodeActive, isTerminalShown, isPreviewShown, isMobile, onFilesClick, onTerminalClick, onPreviewClick}) => {
    const iconClass = `tools__icon tools__icon_mobile_${isMobile}`;
    return(
        <div className='tools'>
            <IconWrapper
                icon={faInfoCircle}
                onClickHandler={() => onFilesClick('README.md')}
                cls={iconClass}
                isActive={isInfoActive}
            />
            <IconWrapper
                icon={faCode}
                onClickHandler={() => onFilesClick('celebration.js')}
                cls={iconClass}
                isActive={isCodeActive}
            />
            <IconWrapper
                icon={faCodeBranch}
                onClickHandler={() => console.log('click')}
                cls={iconClass}
            />
            <IconWrapper
                icon={faTerminal}
                onClickHandler={() => onTerminalClick(isTerminalShown)}
                cls={iconClass}
                isActive={isTerminalShown}
            />
            <IconWrapper
                icon={faImages}
                onClickHandler={() => onPreviewClick(isPreviewShown)}
                cls={iconClass}
                isActive={isPreviewShown}
            />
        </div>
    )
};

export default Tools;
