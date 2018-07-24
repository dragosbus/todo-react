import * as ActioTypes from '../actionTypes/actionTypes';


const taskReducer = (state=[], action) => {
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    switch(action.type) {
        case ActioTypes.ADD_TASK:
            return [...state, 
             {
                 name: action.name,
                 date: {
                    day: weekDays[new Date().getDay()],
                    moment: new Date().toLocaleTimeString()
                  }
             }
            ];
        case ActioTypes.REMOVE_TASK:
            return state.filter((task, index)=>index !== action.index);
        case ActioTypes.EDIT_TASK:
            return state.map((task,index)=>{
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