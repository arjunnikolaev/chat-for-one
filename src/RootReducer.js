import { combineReducers } from 'redux';
import { msg } from './ducks/msg/reducer';

export const rootReducer = combineReducers({
    msg
});
