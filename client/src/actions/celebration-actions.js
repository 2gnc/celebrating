export const startAnswerCheck = (userId, factId, username) => ({ //string, string
    type: 'START_ANSWER_CHECK',
    userId,
    factId,
    username
});

export const setAnswerErr = (userId, factId) => ({ //string, string
    type: 'SET_ANSWER_ERR',
    userId,
    factId
});

export const setAnswerFalse = (userId, factId) => ({ //string
    type: 'SET_ANSWER_FALSE',
    userId,
    factId
});

export const startInitialCelebrationDataFetching = () => ({
    type: 'START_INITIAL_CELEBRATION_DATA_FETCHING'
});

export const setInitialCelebrationData = (data) => ({
    type: 'SET_INITIAL_CELEBRATION_DATA',
    data
});

export const setInitialDataCelebrationFetchingError = () => ({
    type: 'SET_INITIAL_CELEBRATION_DATA_FETCHING_ERROR'
});

export const updateActionsCount = (count) => ({
    type: 'UPDATE_ACTIONS_COUNT',
    count
})
