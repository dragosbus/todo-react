import * as ActionTypes from '../actionTypes/actionTypes';

const initialState = 1;

export const idReducer = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TASK:
            return state + 1;
        case ActionTypes.REMOVE_TASK:
            return state - 1;
        default:
            return state;
    }
};