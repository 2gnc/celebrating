import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import celebrationReducer from '../reducers/celebration-reducer';
import logReducer from '../reducers/log-reducer';
import tabsReducer from '../reducers/tabs-reducer';
import uiReducer from '../reducers/ui-reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    return createStore(
        combineReducers({
            celebration: celebrationReducer,
            log: logReducer,
            tabs: tabsReducer,
            ui: uiReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
};
