import {
    SET_INCOME,
    ADD_EXPENSE,
    REMOVE_EXPENSE,
    RESET_EXPENSES
} from '../actions/types';

const initialState = {
    income: '',
    expenses: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INCOME: {
            return { ...state, income: action.payload };
        }
        case ADD_EXPENSE: {
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        }
        case REMOVE_EXPENSE: {
            return {
                ...state,
                expenses: state.expenses.filter(
                    expense => expense !== action.payload
                )
            };
        }
        case RESET_EXPENSES: {
            return {
                ...state,
                expenses: [],
                income: ''
            };
        }
        default: {
            return state;
        }
    }
};
