import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import {
    celebrationReducer,
    logReducer,
    previewReducer,
    tabsReducer,
    uiReducer
} from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    return createStore(
        combineReducers({
            celebration: celebrationReducer,
            log: logReducer,
            preview: previewReducer,
            tabs: tabsReducer,
            ui: uiReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
};
