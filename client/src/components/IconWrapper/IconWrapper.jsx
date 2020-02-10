import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconWrapper.css';

const IconWrapper = ({icon, cls, onClickHandler, isActive, size = '2x'}) => {
    const additionalCls = isActive ? 'icon-wrapper_active' : '';
    return (
        <div onClick={onClickHandler} className={`icon-wrapper__button ${cls}`}>
            <FontAwesomeIcon
                icon={icon}
                size={size}
                className={`icon-wrapper ${additionalCls}`}
            />
        </div>
    )
};

export default IconWrapper;
