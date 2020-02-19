export const startAnswerCheck = (userId, factId, username) => {
    return async (dispatch) => {
        try {
            dispatch(startedAnswerCheck(userId));
            const data = await fetch(`/v1/check_answer?id=${userId}&factId=${factId}&username=${username}`);
            if (data.status !== 200) {
                throw new Error();
            }
            const {result} = await data.json();
            if (!result) {
                dispatch(setAnswerFalse(userId, factId));
            } else {
                dispatch(setAnswerTrue(userId, username));
            }
        } catch (err) {
            return dispatch(setAnswerErr(userId, factId));
        }
    }
};

export const startedAnswerCheck = (userId) => ({
    type: 'STARTED_ANSWER_CHECK',
    userId
});

export const setAnswerErr = (userId, factId) => ({
    type: 'SET_ANSWER_ERR',
    userId,
    factId
});

export const setAnswerFalse = (userId, factId) => ({ //string
    type: 'SET_ANSWER_FALSE',
    userId,
    factId
});

export const setAnswerTrue = (userId, username) => ({
    type: 'SET_ANSWER_TRUE',
    username,
    userId
});

export const startInitialCelebrationDataFetching = () => {
    return async (dispatch) => {
        try {
            dispatch(startedInitialCelebrationData());
            const data = await fetch('/v1/initialize');
            if (data.status !== 200) {
                throw new Error(data.status);
            }
            const result = await data.json();
            return dispatch(setInitialCelebrationData(result));
        }
        catch (err) {
            return dispatch(setInitialDataCelebrationFetchingError());
        }
    }
};

export const startedInitialCelebrationData = () => ({
    type: 'STARTED_INITIAL_CELEBRATION_DATA'
});

export const setInitialCelebrationData = (data) => ({
    type: 'SET_INITIAL_CELEBRATION_DATA',
    data
});

export const setInitialDataCelebrationFetchingError = () => ({
    type: 'SET_INITIAL_CELEBRATION_DATA_FETCHING_ERROR'
});

export const restartCelebration = () => {
    return async (dispatch) => {
        try {
            dispatch(startedInitialCelebrationData());
            const data = await fetch('/v1/reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (data.status !== 200) {
                throw new Error(data.status);
            }
            const result = await data.json();
            if (result.status === 'updated') {
                dispatch(startInitialCelebrationDataFetching())
            } else {
                return;
            }
        } catch (e) {
            dispatch(setRestartingCelebrationError());
        }
    }
};

export const startRestartingCelebration = () => ({
    type: 'START_RESTARTING_CELEBRATION'
});

export const setRestartingCelebrationError = () => ({
    type: 'SET_RESTARTING_CELEBRATION_ERROR'
});

export const updateActionsCount = (count) => ({
    type: 'UPDATE_ACTIONS_COUNT',
    count
});

export const updateUsernameInput = (userId, value) => ({
    type: 'UPDATE_USERNAME_INPUT',
    userId,
    value
});

// TODO на сервере не выставляется isGuessed в true - поправить
