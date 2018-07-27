import * as ActionTypes from '../actionTypes/actionTypes';

const initialState = false;

export const hideReducer = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.HIDE_COMPLETED:
            return !state;
        default:
            return state;
    }
};