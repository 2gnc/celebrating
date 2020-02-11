import React from 'react';
import LayoutContainer from '../Layout/LayoutContainer';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isProgressShown: true,
            progress: {},
            terminalLog: []
        } 
    }
    render() {
        return (
            <LayoutContainer />
        );
    }
};
