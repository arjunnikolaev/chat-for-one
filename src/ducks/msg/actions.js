import * as types from './action-types';

export const addNewMessage = (message) => ({
    type: types.ADD_NEW_MESSAGE,
    message
});

export const clearMessageList = () => ({
    type: types.CLEAR_MESSAGE_LIST
});