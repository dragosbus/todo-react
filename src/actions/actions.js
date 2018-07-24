import * as ActionTypes from '../actionTypes/actionTypes';

export const addTask = task => {
    return {
        type: ActionTypes.ADD_TASK,
        task
    }
};

export const removeTask = index => {
    return {
        type: ActionTypes.REMOVE_TASK,
        index
    }
};

export const editTask = index => {
    return {
        type: ActionTypes.EDIT_TASK,
        index,
        name
    }
};