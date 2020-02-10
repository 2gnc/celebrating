import React from 'react';
import Layout from '../Layout/Layout';

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
            <Layout />
        );
    }
};
