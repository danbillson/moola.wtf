import {
    GET_TRANSACTIONS,
    ADD_TRANSACTION,
    DELETE_TRANSACTION,
    UPDATE_TRANSACTION,
    TRANSACTION_ERROR
} from '../actions/types';

const initialState = {
    income: [],
    expenses: [],
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS: {
            return {
                ...state,
                income: action.payload.filter(
                    transaction => transaction.amount > 0
                ),
                expenses: action.payload.filter(
                    transaction => transaction.amount <= 0
                )
            };
        }
        case ADD_TRANSACTION: {
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        }
        case DELETE_TRANSACTION: {
            return {
                ...state,
                expenses: state.expenses.filter(
                    expense => expense._id !== action.payload
                )
            };
        }
        case TRANSACTION_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
