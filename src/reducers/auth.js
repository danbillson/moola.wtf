import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const initialState = {
    token: '',
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                token: action.payload.token,
                name: action.payload.name,
                error: ''
            };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
