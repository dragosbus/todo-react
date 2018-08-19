import * as ActionTypes from '../actionTypes/actionTypes';

const initialState = [];

export const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.ADD_TASK:
            return [...state,
                {
                    id: action.id,
                    name: action.name,
                    completed: false,
                }
            ];
        case ActionTypes.REMOVE_TASK:
            return state.filter(task => task.id !== action.index);
        case ActionTypes.EDIT_TASK:
            return state.map(task => {
                if (task.id === action.index) {
                    return {
                        id: task.id,
                        name: action.name,
                        completed: task.completed
                    }
                }
                return task;
            });
        case ActionTypes.COMPLETE_TASK:
            return state.map(task => {
                if (task.id === action.index) {
                    task.completed = !task.completed;
                }
                return task;
            });
        case ActionTypes.MOVE_UP:
            let toPosUp = action.index - 1 < 0 ? state.length - 1 : action.index - 1;
            let fromItemUp = state[action.index];

            let copyUp = state.map((task, i) => {
                if (i === action.index) {
                    return Object.assign({}, state[toPosUp]);
                } else if (i === toPosUp) {
                    return Object.assign({}, fromItemUp);
                }
                return task;
            });
            return copyUp;
        case ActionTypes.MOVE_DOWN:
            let toPosDown = action.index + 1 > state.length - 1 ? 0 : action.index + 1;
            let fromItemDown = state[action.index];

            let copyDown = state.map((task, i) => {
                if (i === action.index) {
                    return Object.assign({}, state[toPosDown]);
                } else if (i === toPosDown) {
                    return Object.assign({}, fromItemDown);
                }
                return task;
            });
            return copyDown;
        default:
            return state;
    }
};