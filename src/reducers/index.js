import { combineReducers } from 'redux';
import auth from './auth';
import expenseReducer from './expenseReducer';
import basicExpenseReducer from './basicExpenseReducer';

export default combineReducers({
    auth,
    expense: expenseReducer,
    basicExpense: basicExpenseReducer
});
