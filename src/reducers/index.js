import {combineReducers} from 'redux';
import {taskReducer} from './taskReducer';
import {idReducer} from './idReducer';
import {hideReducer} from './hideReducer';


const gReducer = combineReducers({
    taskReducer,
    idReducer,
    hideReducer
});

export default gReducer;