import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import { Map } from 'immutable';
// import todoReducer from './TodoReducer';

export type AppStoreState = Map<string,any>;

const rootReducer = combineReducers({
        // todoReducer,
        userReducer
});

export default rootReducer;