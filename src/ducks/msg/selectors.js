export const selectMessages = function(state) {
    return state.msg.messages;
};

export const selectError = function(state) {
    return state.msg.error;
};