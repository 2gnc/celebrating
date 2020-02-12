import React from 'react';
import './Main.css';
import CelebrationContainer from '../Celebration/CelebrationContainer';
import Readme from '../Readme/Readme';

export default class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rows: 0
        }
    }
    componentDidMount = () => {
        this.setState({
            rows: getRowsCount()
        })
    }
    render() {
        return (
            <div className='main'>
                <div className='main__row-count'>
                    {getRows(this.state.rows)}
                </div>
                <div className='main__content'>
                    {this.props.tab === 'README.md' && <Readme />}
                    {this.props.tab === 'celebration.js' && <CelebrationContainer />}
                </div>

            </div>
        )
    }
};

function getRows(num) {
    const elements = [];
    for (let i = 1; i <= num + 10; i++) {
        elements.push(<div key={i}>{i}</div>)
    };
    return elements;
}

function getRowsCount() {
    const el = document.querySelector('.main');
    const areaHeight = el.scrollHeight;
    const areaLineHeight = parseInt(/[0-9]+/.exec(window.getComputedStyle(el).lineHeight)[0], 10);
    return Math.floor(areaHeight / areaLineHeight);
}
