import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { loadState, saveState } from './utils/scripts/localStorage';
import throttle from 'lodash.throttle';

const initialState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxThunk))
);

store.subscribe(
    throttle(() => {
        saveState(store.getState());
    }, 1000)
);

export default store;
