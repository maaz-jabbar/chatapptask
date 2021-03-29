import { combineReducers } from 'redux';
import messageReducer from './messageReducer'

const allReducers = combineReducers({
    messageReducer,
});

export default allReducers;