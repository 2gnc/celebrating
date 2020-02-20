import {concat} from 'lodash';

const dummyLog = [
    {
        timestamp: Date.now(),
        message: 'Начинаем...'
    }
]

const logReducerDefaultState = dummyLog;

export default (state = logReducerDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_LOG':
            const item = {
                message: action.log,
                timestamp: Date.now()
            }
            return concat([...state], item);
        default:
            return state;
    }
};
