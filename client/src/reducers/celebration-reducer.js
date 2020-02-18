import shuffle from '../helpers/shuffleArr';
import mapFactsToUsers from '../helpers/mapsFactsToUsers';

const celebrationReducerDefaultState = {
    isDataFetching: false,
    hasFetchingError: false,
    actionsCount: 0,
    usersOrder: [], // shuffled array of users
    users: {
        '01': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined, 
            value: ''
        },
        '02': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined,
            value: ''
        },
        '03': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined,
            value: ''
        },
        '04': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined,
            value: ''
        },
        '05': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined,
            value: ''
        },
        '06': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined,
            value: ''
        },
        '07': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined,
            value: ''
        },
        '08': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined,
            value: ''
        },
        '09': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined,
            value: ''
        },
        '10': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined,
            value: ''
        },
        '11': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined,
            value: ''
        }
    }
}

export default (state = celebrationReducerDefaultState, action) => {
    switch (action.type) {
        case 'STARTED_ANSWER_CHECK':
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.userId]: {
                        ...state.users[action.userId],
                        isCheckPending: true,
                        error: false
                    }
                }
            };
        case 'SET_ANSWER_ERR', 'SET_ANSWER_FALSE':
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.userId]: {
                        ...state.users[action.userId],
                        isCheckPending: false,
                        error: true
                    }
                }
            };
        case 'SET_ANSWER_TRUE':
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.userId]: {
                        ...state.users[action.userId],
                        isCheckPending: false,
                        username: action.username
                    }
                }
            }
        case 'STARTED_INITIAL_CELEBRATION_DATA':
            return {
                ...state,
                isDataFetching: true
            };
        case 'SET_INITIAL_CELEBRATION_DATA':
            const usersWithFacts = mapFactsToUsers(action.data.facts, celebrationReducerDefaultState.users);
            action.data.guessedUsers.forEach((user) => {
                usersWithFacts[user.id].username = user.username
            });
            return {
                ...state,
                isDataFetching: false,
                users: usersWithFacts,
                usersOrder: shuffle(Object.keys(usersWithFacts))
            };
        case 'SET_INITIAL_CELEBRATION_DATA_FETCHING_ERROR':
            return {
                ...state,
                isDataFetching: false,
                hasFetchingError: true
            };
        case 'UPDATE_ACTIONS_COUNT':
            return {
                ...state,
                actionsCount: state.actionsCount + action.count
            };
        case 'UPDATE_USERNAME_INPUT':
            return {
                ...state,
                users: {
                    ...state.users,
                    [action.userId]: {
                        ...state.users[action.userId],
                        value: action.value
                    }
                }
            };
        case 'START_RESTARTING_CELEBRATION':
            return {
                ...state,
                isDataFetching: true
            };
        case 'SET_RESTARTING_CELEBRATION_ERROR':
            return {
                ...state,
                isDataFetching: false,
                hasFetchingError: true
            };
        default:
            return state;
    }
}
