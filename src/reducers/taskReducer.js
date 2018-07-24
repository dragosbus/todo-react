import * as ActioTypes from '../actionTypes/actionTypes';


const taskReducer = (state, action) => {
    switch(action.type) {
        case ActioTypes.ADD_TASK:
            return [...state, action.task];
        case ActioTypes.REMOVE_TASK:
            return state.filter((task, index)=>index !== action.index);
        case ActioTypes.EDIT_TASK:
            return state.map((task,index)=>{
                if(index === action.index) {
                    task.name = action.name;
                }
                return task;
            });
        default:
            return state;
    }
};


export default taskReducer;