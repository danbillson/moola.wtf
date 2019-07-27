import { combineReducers } from 'redux';
import auth from './auth';
import expenseReducer from './expenseReducer';

export default combineReducers({
    auth,
    expense: expenseReducer
});
