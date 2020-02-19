import React from 'react';
import './Tools.css';
import {
    faCodeBranch,
    faInfoCircle,
    faTerminal,
    faImages,
    faCode,
    faSyncAlt
} from '@fortawesome/free-solid-svg-icons';
import IconWrapper from '../IconWrapper/IconWrapper';

export default (props) => {
    const {
        isInfoActive,
        isCodeActive,
        isTerminalShown,
        isPreviewShown,
        isMobile,
        onFilesClick,
        onTerminalClick,
        onPreviewClick,
        actionsCount,
        showReset,
        onRestartClick
    } = props;
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
                counter={actionsCount}
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
            {isCodeActive && <IconWrapper
                icon={faSyncAlt}
                onClickHandler={() => onRestartClick()}
                cls={iconClass}
                isActive={showReset}
            />}
        </div>
    )
};
