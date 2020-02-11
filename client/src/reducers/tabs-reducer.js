import {cloneDeep} from 'lodash';

const tabsReducerDefaultState = {
    activeTab: 'README.md'
};

export default (state = tabsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SELECT_TAB':
            const newState = cloneDeep(state);
            newState.activeTab = action.tab;
            return newState;
        default:
            return state;
    }
};
