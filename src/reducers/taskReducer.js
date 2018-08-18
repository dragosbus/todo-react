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
            return state.filter(task=>task.id!==action.index);
        case ActionTypes.EDIT_TASK:
            return state.map(task=> {
                if(task.id === action.index) {
                    return {
                        id: task.id,
                        name: action.name,
                        completed: task.completed
                    }
                }
                return task;
            });
        case ActionTypes.COMPLETE_TASK:
            return state.map(task=> {
                if(task.id=== action.index) {
                    task.completed = !task.completed;
                }
                return task;
            });
        default:
            return state;
    }
};