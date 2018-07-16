import * as types from './action-types';

export const fetchMessages = (messages) => ({
    type: types.FETCH_MESSAGES,
    messages
});
