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
            username: undefined
        },
        '02': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined
        },
        '03': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined
        },
        '04': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined
        },
        '05': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined
        },
        '06': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined
        },
        '07': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined
        },
        '08': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined
        },
        '09': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined
        },
        '10': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined
        },
        '11': {
            isCheckPending: false,
            error: false,
            fact: undefined,
            username: undefined
        }
    }
}

export default (state = celebrationReducerDefaultState, action) => {
    switch (action.type) {
        case 'START_ANSWER_CHECK':
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
            };
        case 'SET_ANSWER_ERR':
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
        case 'START_INITIAL_CELEBRATION_DATA_FETCHING':
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
            }
        default:
            return state;
    }
}
