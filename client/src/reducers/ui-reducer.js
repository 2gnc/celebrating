import {cloneDeep} from 'lodash';

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
            const newState = cloneDeep(state);
            newState.isPreviewShown = true;
            return newState;
        case 'HIDE_PREVIEW':
            const newState = cloneDeep(state);
            newState.isPreviewShown = false;
            return newState;
        case 'SHOW_TERMINAL':
            const newState = cloneDeep(state);
            newState.isTerminalShown = true;
            return newState;
        case 'HIDE_TERMINAL':
            const newState = cloneDeep(state);
            newState.isTerminalShown = false;
            return newState;
        case 'START_INITIAL_DATA_FETCHING':
            const newState = cloneDeep(state);
            newState.isDataFetching = true;
            return newState;
        case 'SET_INITIAL_DATA':
            const newState = cloneDeep(state);
            newState.isDataFetching = false;
            newState.initialData = action.data;
            return newState;
        case 'SET_INITIAL_DATA_FETCHING_ERROR':
            const newState = cloneDeep(state);
            newState.isDataFetching = false;
            newState.hasFetchingError = true;
            return newState;
        default:
            const newState = cloneDeep(state);
            return newState;
    }
};
