import {combineReducers} from 'redux';
import {taskReducer} from './taskReducer';
import {hideReducer} from './hideReducer';


const gReducer = combineReducers({
    taskReducer,
    hideReducer
});

export default gReducer;