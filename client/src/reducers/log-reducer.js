import {concat} from 'lodash';

const logReducerDefaultState = [];

export default (state = logReducerDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_LOG':
            const newState = [...state];
            return concat(newState, action.log);
        default:
            return state;
    }
}
