import shuffle from '../helpers/shuffleArr';

const dummyFacts = [
    {
        id: '01',
        factId: '01-1',
        factText: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: '02',
        factId: '02-1',
        factText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        id: '03',
        factId: '03-2',
        factText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, porro.'
    },
    {
        id: '04',
        factId: '04-3',
        factText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: '05',
        factId: '05-1',
        factText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, reiciendis nihil.'
    },
    {
        id: '06',
        factId: '06-1',
        factText: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
    },
    {
        id: '07',
        factId: '07-2',
        factText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti harum veritatis corporis.'
    },
    {
        id: '08',
        factId: '08-2',
        factText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quae quia aliquam!'
    },
    {
        id: '09',
        factId: '09-2',
        factText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, harum.'
    },
    {
        id: '10',
        factId: '10-2',
        factText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, fugit!'
    },
    {
        id: '11',
        factId: '11-1',
        factText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, fugit!'
    }
];

const uiReducerDefaultState = {
    isPreviewShown: true,
    isTerminalShown: true,
    isDataFetching: false,
    hasFetchingError: false,
    initialData: undefined,
    factsToShow: shuffle(dummyFacts) //[]
};

export default (state = uiReducerDefaultState, action) => {
    switch (action.type) {
        case 'SHOW_PREVIEW':
            return {
                ...state,
                isPreviewShown: true
            };
        case 'HIDE_PREVIEW':
            return {
                ...state,
                isPreviewShown: false
            };
        case 'SHOW_TERMINAL':
            return {
                ...state,
                isTerminalShown: true
            };
        case 'HIDE_TERMINAL':
            return {
                ...state,
                isTerminalShown: false
            };
        case 'START_INITIAL_DATA_FETCHING':
            return {
                ...state,
                isDataFetching: true
            };
        case 'SET_INITIAL_DATA':
            return {
                ...state,
                isDataFetching: false,
                initialData: action.data
            };
        case 'SET_INITIAL_DATA_FETCHING_ERROR':
            return {
                ...state,
                isDataFetching: false,
                hasFetchingError: true
            };
        default:
            return state;
    }
};
