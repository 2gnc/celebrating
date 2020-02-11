import {concat} from 'lodash';

const dummyLog = [
    {
        timestamp: Date.now(),
        message: 'Dummy log message 1'
    },
    {
        timestamp: Date.now(),
        message: 'Dummy log message 2'
    },
    {
        timestamp: Date.now(),
        message: 'Dummy log message 3'
    },
]

const logReducerDefaultState = dummyLog;

export default (state = logReducerDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_LOG':
            return concat([...state], action.log);
        default:
            return state;
    }
};
