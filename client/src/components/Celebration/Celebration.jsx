import React from 'react';
import './Celebration.css';
import Fact from '../Fact/Fact';

export default class Celebration extends React.Component /*({users, order, startDataFetching}) => */{
    componentDidMount = () => {
        this.props.startDataFetching();
    }
    render() {
        const {users, order} = this.props;
        return (
            <div className='celebration'>
                {!order.length && <span className='celebration__loading'>Loading...</span>}
                {
                    order.map((num) => {
                        return (
                            <Fact
                                key={num}
                                factId={users[num].fact.factId}
                                text={users[num].fact.factText}
                                id={num}
                            />
                        )
                    })
                }
            </div>
        )
    }
};
