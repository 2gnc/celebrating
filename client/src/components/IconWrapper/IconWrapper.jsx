import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconWrapper.css';

export default ({icon, cls, onClickHandler, isActive, size = '2x', counter}) => {
    const additionalCls = isActive ? 'icon-wrapper_active' : '';
    return (
        <div onClick={onClickHandler} className={`icon-wrapper__button ${cls}`}>
            <FontAwesomeIcon
                icon={icon}
                size={size}
                className={`icon-wrapper ${additionalCls}`}
            />
            {getCounter(counter)}
        </div>
    )
};

function getCounter(counter) {
    if (counter !== undefined) {
        return <div className='icon-wrapper__counter'>{counter}</div>
    }
    return null;
}
