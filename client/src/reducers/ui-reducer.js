const uiReducerDefaultState = {
    isPreviewShown: true,
    isTerminalShown: true,
    isDataFetching: false,
    hasFetchingError: false,
    initialData: undefined
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
