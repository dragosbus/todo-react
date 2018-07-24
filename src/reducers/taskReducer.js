import * as ActioTypes from '../actionTypes/actionTypes';


const initialState = {
    tasks: [],
    id: 1
};

const taskReducer = (state=initialState, action) => {
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    switch(action.type) {
        case ActioTypes.ADD_TASK:
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
        case ActioTypes.REMOVE_TASK:
            return state.tasks.filter((task, index)=>index !== action.index);
        case ActioTypes.EDIT_TASK:
            return state.tasks.map((task,index)=>{
                if(index === action.index) {
                    return {
                        date: task.date,
                        name: action.name,
                    }
                }
                return task;
            });
        default:
            return state;
    }
};


export default taskReducer;