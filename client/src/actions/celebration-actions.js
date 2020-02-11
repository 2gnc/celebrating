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

export const showCelebration = () => ({
    type: 'SHOW_CELEBRATION'
});

export const hideCelebration = () => ({
    type: 'HIDE_CELEBRATION'
});
