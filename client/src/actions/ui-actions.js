export const showPreview = () => ({
    type: 'SHOW_PREVIEW'
});

export const hidePreview = () => ({
    type: 'HIDE_PREVIEW'
});

export const showTerminal = () => ({
    type: 'SHOW_TERMINAL'
});

export const hideTerminal = () => ({
    type: 'HIDE_TERMINAL'
});

export const startInitialDataFetching = () => ({
    type: 'START_INITIAL_DATA_FETCHING'
});

export const setInitialData = (data) => ({
    type: 'SET_INITIAL_DATA',
    data
});

export const setInitialDataFetchingError = () => ({
    type: 'SET_INITIAL_DATA_FETCHING_ERROR'
});
