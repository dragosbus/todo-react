import {combineReducers} from 'redux';
import {taskReducer} from './taskReducer';
import {visibilityFilter} from './visibilityFilter';
import {moveReducer} from './move';


const gReducer = combineReducers({
    taskReducer,
    visibilityFilter,
    move: moveReducer
});

export default gReducer;