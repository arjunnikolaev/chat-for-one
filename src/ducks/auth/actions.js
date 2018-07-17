import * as types from './action-types';

export const logIn = (user) => ({
    type: types.LOG_IN,
    user
});

export const logOut = () => ({
    type: types.LOG_OUT
});