import React from 'react';
import Cookies from 'js-cookie';
import {initiatedStore} from '../../index';
import {selectTab} from '../../actions/tabs-actions';
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
    componentDidMount = () => {
        if (!Cookies.get('knows_rules')) {
            Cookies.set('knows_rules', 1, { expires: 10 })
        } else {
            initiatedStore.dispatch(selectTab('celebration.js'))
        }
    }
    render() {
        return (
            <LayoutContainer />
        );
    }
};
