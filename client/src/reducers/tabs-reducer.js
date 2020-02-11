const tabsReducerDefaultState = {
    activeTab: 'README.md'
};

export default (state = tabsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SELECT_TAB':
            return {
                ...state,
                activeTab: action.tab
            };
        default:
            return state;
    }
};
