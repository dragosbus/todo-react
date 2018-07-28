import * as ActionTypes from '../actionTypes/actionTypes';

const initialState = [];

export const taskReducer = (state = initialState, action) => {
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    switch (action.type) {
        case ActionTypes.ADD_TASK:
            return [...state,
                {   
                    id: action.id,
                    name: action.name,
                    completed: false,
                    date: {
                        day: weekDays[new Date().getDay()],
                        moment: new Date().toLocaleTimeString()
                    }
                }
            ];
        case ActionTypes.REMOVE_TASK:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case ActionTypes.EDIT_TASK:
            return state.map(task=> {
                if(task.id === action.index) {
                    return {
                        id: task.id,
                        name: action.name,
                        date: task.date
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