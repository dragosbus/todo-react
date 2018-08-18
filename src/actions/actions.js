import * as ActionTypes from '../actionTypes/actionTypes';

export const addTask = (id, name) => ({
    type: ActionTypes.ADD_TASK,
    name,
    id
});

export const removeTask = index => ({
    type: ActionTypes.REMOVE_TASK,
    index
});

export const editTask = (index, name) => ({
    type: ActionTypes.EDIT_TASK,
    index,
    name
});

export const completeTask = index => ({
    type: ActionTypes.COMPLETE_TASK,
    index
});

export const visibilityFilter = filter => ({
    type: ActionTypes.VISIBILITY_FILTER,
    filter
});

export const moveUp = index => ({
    type: ActionTypes.MOVE_UP,
    index
});

export const moveDown = index => ({
    type: ActionTypes.MOVE_DOWN,
    index
});