import * as ActionTypes from '../actionTypes/actionTypes';


const initialState = {
    tasks: [],
    id: 1
};

const taskReducer = (state=initialState, action) => {
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    switch(action.type) {
        case ActionTypes.ADD_TASK:
            return {
                tasks: [...state.tasks, 
                    {   
                        id: state.id,
                        name: action.name,
                        date: {
                           day: weekDays[new Date().getDay()],
                           moment: new Date().toLocaleTimeString()
                         }
                    }
                   ],
                id: state.id + 1
            };
        case ActionTypes.REMOVE_TASK:
            return {
                tasks: state.tasks.filter((task, index)=>index !== action.index),
                id: state.id
            };
        case ActionTypes.EDIT_TASK:
            return {
                tasks: state.tasks.map((task,index)=>{
                    if(index === action.index) {
                        return {
                            date: task.date,
                            name: action.name,
                        }
                    }
                    return task;
                }),
                id: state.id
            };
        default:
            return state;
    }
};


export default taskReducer;