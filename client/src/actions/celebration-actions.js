// export const startAnswerCheck = (userId, factId, username) => ({ //string, string
//     type: 'START_ANSWER_CHECK',
//     userId,
//     factId,
//     username
// });
export const startAnswerCheck = (userId, factId, username) => { //string, string
    return async (dispatch) => {
        try {
            const data = await fetch('/v1/check_answer');
            if (data.status !== 200) {
                throw new Error();
            }
            const result = await data.json();
            console.log(result);
        } catch (err) {
            return dispatch(setAnswerErr(userId, factId));
        }
    }
};

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

// TODO Set answer true

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

export const updateActionsCount = (count) => ({
    type: 'UPDATE_ACTIONS_COUNT',
    count
});

export const updateUsernameInput = (userId, value) => ({ // userId, value
    type: 'UPDATE_USERNAME_INPUT',
    userId,
    value
});
