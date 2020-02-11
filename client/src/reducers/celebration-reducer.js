import {cloneDeep} from 'lodash';

const celebrationReducerDefaultState = {
    isCelebrationShown: false,
    users: {
        '01': {
            isCheckPending: false,
            error: false,
            facts: {
                '01-1': false,
                '01-2': false,
                '01-3': false
            },
            username: '',
        },
        '02': {
            isCheckPending: false,
            error: false,
            facts: {
                '02-1': false,
                '02-2': false,
                '02-3': false
            },
            username: ''
        },
        '03': {
            isCheckPending: false,
            error: false,
            facts: {
                '03-1': false,
                '03-2': false,
                '03-3': false
            },
            username: ''
        },
        '04': {
            isCheckPending: false,
            error: false,
            facts: {
                '04-1': false,
                '04-2': false,
                '04-3': false
            },
            username: ''
        },
        '05': {
            isCheckPending: false,
            error: false,
            facts: {
                '05-1': false,
                '05-2': false,
                '05-3': false
            },
            username: ''
        },
        '06': {
            isCheckPending: false,
            error: false,
            facts: {
                '06-1': false,
                '06-2': false,
                '06-3': false
            },
            username: ''
        },
        '07': {
            isCheckPending: false,
            error: false,
            facts: {
                '07-1': false,
                '07-2': false,
                '07-3': false
            },
            username: ''
        },
        '08': {
            isCheckPending: false,
            error: false,
            facts: {
                '08-1': false,
                '08-2': false,
                '08-3': false
            },
            username: ''
        },
        '09': {
            isCheckPending: false,
            error: false,
            facts: {
                '09-1': false,
                '09-2': false,
                '09-3': false
            },
            username: ''
        },
        '10': {
            isCheckPending: false,
            error: false,
            facts: {
                '10-1': false,
                '10-2': false,
                '10-3': false
            },
            username: ''
        },
        '11': {
            isCheckPending: false,
            error: false,
            facts: {
                '11-1': false,
                '11-2': false,
                '11-3': false
            },
            username: ''
        }
    }
}

export default (state = celebrationReducerDefaultState, action) => {
    switch (action.type) {
        case 'START_ANSWER_CHECK':
            const newState = cloneDeep(state);
            newState.users[action.userId].isCheckPending = true;
            return newState;
        case 'SET_ANSWER_TRUE':
            const newState = cloneDeep(state);
            newState.users[action.userId].isCheckPending = false;
            newState.users[action.userId].facts[action.factId] = true;
            newState.users[action.userId].username = action.username;
            return newState;
        case 'SET_ANSWER_ERR':
            const newState = cloneDeep(state);
            newState.users[action.userId].isCheckPending = false;
            newState.users[action.userId].facts[action.factId] = false;
            newState.users[action.userId].error = true;
            return newState;
        case 'SHOW_CELEBRATION':
            return {
                ...state,
                isCelebrationShown: true
            }
        case 'HIDE_CELEBRATION':
            return {
                ...state,
                isCelebrationShown: false
            }
        default:
            return state;
    }
}
