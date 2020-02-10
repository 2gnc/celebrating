import React from 'react';
import './Tools.css';
import {
    faCodeBranch,
    faInfoCircle,
    faTerminal,
    faTasks
} from '@fortawesome/free-solid-svg-icons';
import IconWrapper from '../IconWrapper/IconWrapper';

const Tools = () => {
    return(
        <div className='tools'>
            <IconWrapper
                icon={faInfoCircle}
                onClickHandler={() => console.log('click')}
                cls='tools__icon'
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
