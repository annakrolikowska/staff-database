import {SET_SORTING} from "../actions/sorting.actions";

const initialSortingState = {
    column: null,
    direction: null,
};
const sortingReducer = (state = initialSortingState, action) => {
    switch (action.type) {
        case SET_SORTING:
            if (state.column !== action.payload) {
                return {
                    column: action.payload,
                    direction: 'asc',
                };
            } else if (state.direction === 'asc') {
                return {
                    ...state,
                    direction: 'desc',
                };
            } else {
                return initialSortingState;
            }
        default:
            return state;
    }
};

export default sortingReducer;
