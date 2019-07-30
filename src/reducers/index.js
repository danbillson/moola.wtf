import { combineReducers } from 'redux';
import auth from './auth';
import basicExpenseReducer from './basicExpenseReducer';

export default combineReducers({
    auth,
    basicExpense: basicExpenseReducer
});
