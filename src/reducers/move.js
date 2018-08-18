import * as ActionTypes from '../actionTypes/actionTypes';

export const moveReducer = (state=0, action) => {
    switch(action.type) {
        case ActionTypes.MOVE_UP:
            return [action.index, action.index - 1];
        case ActionTypes.MOVE_DOWN:
            return action.index + 1;
        default:
            return state;
    }
};