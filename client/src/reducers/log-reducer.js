import {concat} from 'lodash';

const logReducerDefaultState = [];

export default (state = logReducerDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_LOG':
            return concat([...state], action.log);
        default:
            return state;
    }
};
