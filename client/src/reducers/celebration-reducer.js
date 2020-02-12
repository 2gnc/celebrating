import shuffle from '../helpers/shuffleArr';
import mapFactsToUsers from '../helpers/mapsFactsToUsers';

const dummyFacts = {
    '01' :{
        factId: '01-1',
        factText: 'Lorem ipsum dolor sit amet.'
    },
    '02': {
        factId: '02-1',
        factText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    '03': {
        factId: '03-2',
        factText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, porro.'
    },
    '04': {
        factId: '04-3',
        factText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    '05': {
        factId: '05-1',
        factText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, reiciendis nihil.'
    },
    '06': {
        factId: '06-1',
        factText: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
    },
    '07': {
        factId: '07-2',
        factText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti harum veritatis corporis.'
    },
    '08': {
        factId: '08-2',
        factText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quae quia aliquam!'
    },
    '09': {
        factId: '09-2',
        factText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, harum.'
    },
    '10': {
        factId: '10-2',
        factText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, fugit!'
    },
    '11': {
        factId: '11-1',
        factText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, fugit!vv'
    }
};

const celebrationReducerDefaultState = {
    isDataFetching: false,
    hasFetchingError: false,
    usersToShow: [], // shuffled array of users
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
        case 'SET_INITIAL_CELEBRATION_DATA': //data, ожидаем {facts: {}, guessedUsers: [{id: '01', username: 'tgnc'}]}
            const usersWithFacts = mapFactsToUsers(action.data.facts || dummyFacts, celebrationReducerDefaultState.users);
            action.data.guessedUsers.forEach((user) => {
                usersWithFacts[user.id].username = user.username
            });
            return {
                ...state,
                users: usersWithFacts,
                usersToShow: shuffle(Object.keys(usersWithFacts))
            };
        case 'SET_INITIAL_CELEBRATION_DATA_FETCHING_ERROR':
            return {
                ...state,
                isDataFetching: false,
                hasFetchingError: true
            };
        default:
            return state;
    }
}
