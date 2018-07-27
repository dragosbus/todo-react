import * as ActionTypes from '../actionTypes/actionTypes';


const initialState = [];

export const taskReducer = (state = initialState, action) => {
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    switch (action.type) {
        case ActionTypes.ADD_TASK:
            return [...state,
                {
                    id: state.id,
                    name: action.name,
                    completed: false,
                    date: {
                        day: weekDays[new Date().getDay()],
                        moment: new Date().toLocaleTimeString()
                    }
                }
            ];
        case ActionTypes.REMOVE_TASK:
            return state.filter((task, index) => index !== action.index)
            .map((task, i) => {
                return {
                    id: i + 1,
                    completed: false,
                    name: task.name,
                    date: task.date
                }
            });
        case ActionTypes.EDIT_TASK:
            return state.map((task, index) => {
                if (index === action.index - 1) {
                    return {
                        id: action.index,
                        date: task.date,
                        name: action.name,
                    }
                }
                return task;
            });
        case ActionTypes.COMPLETE_TASK:
            return state.map((task, index)=> {
                if(index=== action.index) {
                    task.completed = !task.completed;
                }
                return task;
            });
        default:
            return state;
    }
};