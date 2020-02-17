import './Fact.css';
import React from 'react';
import IconWrapper from '../IconWrapper/IconWrapper';
import {faGlassCheers} from '@fortawesome/free-solid-svg-icons';

export default class Fact extends React.PureComponent /* () */ {
    usernameSubmitHandler = (e) => {
        const {onAnswer, id, onChange, value} = this.props;
        e.preventDefault();
        onChange(id, '');
    }
    getUsernameView = () => {
        const {value, isCheckPending, onChange, id} = this.props;
        if (isCheckPending) {
            return (
            <IconWrapper
                //{icon, cls, onClickHandler, isActive, size = '2x', counter}
                cls='fact__icon fact__icon_animated'
                icon={faGlassCheers}
                size='s'
                isActive={true}
            />)
        }
        return (
            <form className='fact__form' onSubmit={(e) => this.usernameSubmitHandler(e)}>
                <input type="text" value={value} className='fact__input' onChange={(e) => onChange(id, e.target.value)} />
            </form>
        )
    }
    render() {
        const {factId, text, id, onChange} = this.props;
        return (
            <div className='fact'>
                {text}
                {this.getUsernameView()}
            </div>
        )
    }
    
};
