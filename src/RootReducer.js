import { combineReducers } from 'redux';
import { msg } from './ducks/msg/reducer';
import { auth } from './ducks/auth/reducer';

export const rootReducer = combineReducers({
    msg,
    auth
});
