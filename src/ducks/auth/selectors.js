export const selectUser = function(state) {
    return state.auth.user
};

export const selectIsAuth = function(state) {
    return state.auth.isAuth
};