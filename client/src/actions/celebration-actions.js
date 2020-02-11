export const startAnswerCheck = (factId, username) => ({ //string, string
    type: 'START_ANSWER_CHECK',
    factId,
    username
});

export const setAnswerTrue = (factId, username) => ({ //string, string
    type: 'SET_ANSWER_TRUE',
    factId,
    username
});

export const setAnswerFalse = (factId) => ({ //string
    type: 'SET_ANSWER_FALSE',
    factId
});

export const showCelebration = () => ({
    type: 'SHOW_CELEBRATION'
});

export const hideCelebration = () => ({
    type: 'HIDE_CELEBRATION'
});
