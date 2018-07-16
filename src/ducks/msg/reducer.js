import * as types from './action-types';

const initialState = {
    messages: []
};

export const msg = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_MESSAGES:
            return {
                ...state,
                messages: action.messages
            };
        default:
            return state;
    }
};
