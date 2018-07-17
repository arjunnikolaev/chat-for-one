import * as types from './action-types';

const initialState = {
    isAuth: false,
    user: ''
};

export const auth = (state = initialState, action) => {
    switch(action.type) {
        case types.LOG_IN:
            return {
                ...state,
                isAuth: true,
                user: action.user
            };
        case types.LOG_OUT:
            return {
                ...state,
                isAuth: false,
                user: ''
            };
        default:
            return state;
    }
};