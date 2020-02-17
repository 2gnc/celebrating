import React from 'react';
import './Celebration.css';
import Fact from '../Fact/Fact';

export default class Celebration extends React.Component /*({users, order, startDataFetching}) => */{
    componentDidMount = () => {
        this.props.startDataFetching();
    }
    render() {
        const {users, order, isDataFetching, onAnswer, onInputChange} = this.props;
        return (
            <div className='celebration'>
                {isDataFetching && <span className='celebration__loading'>Loading...</span>}
                {
                    order.map((num) => {
                        return (
                            <Fact
                                key={num}
                                factId={users[num].fact.factId}
                                text={users[num].fact.factText}
                                id={num}
                                onAnswer={onAnswer}
                                value={users[num].value}
                                onChange={onInputChange}
                                isCheckPending={users[num].isCheckPending}
                                hasError={users[num].error}
                                username={users[num].username}
                            />
                        )
                    })
                }
            </div>
        )
    }
};
