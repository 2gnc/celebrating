import './Fact.css';
import React from 'react';
import IconWrapper from '../IconWrapper/IconWrapper';
import {faGlassCheers} from '@fortawesome/free-solid-svg-icons';

export default class Fact extends React.PureComponent /* () */ {
    usernameSubmitHandler = (e) => {
        const {onAnswer, id, onChange, value, factId} = this.props;
        e.preventDefault();
        if (value) {
            onAnswer(id, factId, value);
        }
        onChange(id, '');
    }
    getUsernameView = () => {
        const {value, isCheckPending, onChange, id, username, hasError} = this.props;
        if (username) {
            return (
                <>
                    <span className='fact__username'>
                        {username}
                    </span>
                    <IconWrapper
                        cls='fact__icon fact__icon_guessed'
                        icon={faGlassCheers}
                        size='sm'
                        isActive={true}
                    />
                </>
            )
        }
        if (isCheckPending) {
            return (
                <IconWrapper
                    cls='fact__icon fact__icon_animated'
                    icon={faGlassCheers}
                    size='sm'
                    isActive={true}
                />
            )
        }
        return (
            <>
                <form className='fact__form' onSubmit={(e) => this.usernameSubmitHandler(e)}>
                    <input type="text" value={value} className='fact__input' onChange={(e) => onChange(id, e.target.value)} />
                </form>
                {hasError &&
                    <>
                        <IconWrapper
                            cls='fact__icon fact__icon_error'
                            icon={faGlassCheers}
                            size='sm'
                            isActive={true}
                        />
                        <span className='fact__errormsg'>{'ups... try again'}</span>
                    </>
                }
            </>
        )
    }
    render() {
        const {text} = this.props;
        return (
            <div className='fact'>
                {text}
                {this.getUsernameView()}
            </div>
        )
    }
    
};
