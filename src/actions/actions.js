import * as ActionTypes from '../actionTypes/actionTypes';

export const addTask = name => {
    return {
        type: ActionTypes.ADD_TASK,
        name
    }
};

export const removeTask = index => {
    return {
        type: ActionTypes.REMOVE_TASK,
        index
    }
};

export const editTask = (index, name) => {
    return {
        type: ActionTypes.EDIT_TASK,
        index,
        name
    }
};

export const completeTask = index => {
    return {
        type: ActionTypes.COMPLETE_TASK,
        index
    }
};