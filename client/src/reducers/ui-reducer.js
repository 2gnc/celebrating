const uiReducerDefaultState = {
    isPreviewShown: true,
    isTerminalShown: true,
    isCelebrationShown: false
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
        case 'SHOW_CELEBRATION':
            return {
                ...state,
                isCelebrationShown: true
            };
        case 'HIDE_CELEBRATION':
            return {
                ...state,
                isCelebrationShown: false
            };
        default:
            return state;
    }
};


// export const updateUsernameInput = (data) => ({ // userId, value
//     type: 'UPDATE_USERNAME_INPUT',
//     data
// })
