import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {
    auth: {
        token: localStorage.getItem('token')
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxThunk))
);
