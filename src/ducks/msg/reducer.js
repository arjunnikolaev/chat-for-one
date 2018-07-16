import * as types from './action-types';
import {ADD_NEW_MESSAGE} from "./action-types";
import {CLEAR_MESSAGE_LIST} from "./action-types";

const initialState = {
    messages: []
};

export const msg = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            };
        case CLEAR_MESSAGE_LIST:
            return {
                ...state,
                messages: []
            };
        default:
            return state;
    }
};
