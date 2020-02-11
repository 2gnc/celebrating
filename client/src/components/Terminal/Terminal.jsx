import React from 'react';
import {DateTime} from 'luxon';
import './Terminal.css';

export default class Terminal extends React.Component {
    getLog = () => {
        return this.props.log.map((item) => {
            const [name, ...message] = item.message.split(' ');
            const date = DateTime.fromMillis(item.timestamp).toHTTP();
            return (
                <div className='terminal__item' key={item.timestamp}>
                    <span className='terminal__item-time'>
                        {date}
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
        const terminalMod = this.props.isTerminalShown ? 'shown' : 'hidden'
        return (
            <div className='terminal'>
                <div className='terminal__header'>
                    terminal
                </div>
                <div className={`terminal__body terminal__body_${terminalMod}`}>
                    {this.getLog()}
                </div>
            </div>
        )
    }
}
