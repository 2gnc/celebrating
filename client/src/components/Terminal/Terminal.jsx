import React from 'react';
import './Terminal.css';

export default class Terminal extends React.Component {
    getLog = () => {
        return this.props.log.map((item) => {
            const [name, ...message] = item.message.split(' ');
            return (
                <div className='terminal__item' key={item.timestamp}>
                    <span className='terminal__item-time'>
                        {item.timestamp}
                    </span>
                    <span className='terminal__item-name'>
                        {name}
                    </span>
                    <span className='terminal__item-message'>
                        {message.join(' ')}
                    </span>
                </div>
            )
        }).reverse();
    };

    render() {
        return (
            <div className='terminal'>
                <div className='terminal__header'>
                    terminal
                </div>
                <div className='terminal__body'>
                    {this.getLog()}
                </div>
            </div>
        )
    }
    
}
