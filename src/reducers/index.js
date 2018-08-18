import {combineReducers} from 'redux';
import {taskReducer} from './taskReducer';
import {visibilityFilter} from './visibilityFilter';


const gReducer = combineReducers({
    taskReducer,
    visibilityFilter
});

export default gReducer;