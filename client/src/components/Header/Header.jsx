import React from 'react';
import IconWrapper from '../IconWrapper/IconWrapper';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = ({file, onTabClick}) => {
    function getTab() {
        return ['celebration.js', 'README.md'].map((item) => {
            const modifier = item === file ? ' header__tab_active' : '';
            const icon = item === 'README.md' ? faInfoCircle : faJs;
            const cls = item === 'README.md' ? '_md'  : '_js';
            return (
                <div className={`header__tab${modifier}`} key={item} onClick={() => onTabClick(item)}>
                    <IconWrapper
                        icon={icon}
                        size={'xs'}
                        cls={`header__icon header__icon${cls}`}
                    />
                    {item}
                </div>
            )
        });
    }
    return (
        <header className='header'>
            <div className='header__tabs'>
                {getTab()}
            </div>
            <div className='header__breadcrumbs'>
                {`src > ${file}`}
            </div>
        </header>
    );
};

export default Header;
