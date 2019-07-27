import axios from 'axios';
import {
    SET_INCOME,
    ADD_EXPENSE,
    REMOVE_EXPENSE,
    AUTH_USER,
    AUTH_ERROR
} from './types';

const apiURL =
    process.env.NODE_ENV === 'production'
        ? 'http://api.moola.wtf'
        : 'http://localhost:3090';

export const signUp = (formProps, callback) => async dispatch => {
    try {
        const { data } = await axios.post(`${apiURL}/signup`, formProps);

        dispatch({ type: AUTH_USER, payload: data.token });
        localStorage.setItem('token', data.token);
        callback();
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.response.data.error || 'An error occured'
        });
    }
};

export const signIn = (formProps, callback) => async dispatch => {
    try {
        const { data } = await axios.post(`${apiURL}/signin`, formProps);

        dispatch({ type: AUTH_USER, payload: data.token });
        localStorage.setItem('token', data.token);
        callback();
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.response.data.error || 'An error occured'
        });
    }
};

export const signOut = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ''
    };
};

export const setIncome = income => {
    return {
        type: SET_INCOME,
        payload: income
    };
};

export const addExpense = expense => {
    return {
        type: ADD_EXPENSE,
        payload: expense
    };
};

export const removeExpense = expense => {
    return {
        type: REMOVE_EXPENSE,
        payload: expense
    };
};
