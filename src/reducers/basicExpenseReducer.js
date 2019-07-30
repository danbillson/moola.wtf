import { SET_INCOME, ADD_EXPENSE, REMOVE_EXPENSE } from '../actions/types';

const initialState = {
    income: null,
    basicExpenses: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INCOME: {
            return { ...state, income: action.payload };
        }
        case ADD_EXPENSE: {
            return {
                ...state,
                basicExpenses: [...state.basicExpenses, action.payload]
            };
        }
        case REMOVE_EXPENSE: {
            return {
                ...state,
                basicExpenses: state.basicExpenses.filter(
                    expense => expense !== action.payload
                )
            };
        }
        default: {
            return state;
        }
    }
};
