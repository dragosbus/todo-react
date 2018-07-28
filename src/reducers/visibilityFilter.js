import * as ActionTypes from '../actionTypes/actionTypes';

const initialState = 'SHOW_ALL';

export const visibilityFilter = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};