import {
    SET_DOB_FILTER,
    SET_EXPERIENCE_FILTER,
    SET_FIRST_NAME_FILTER,
    SET_FUNCTION_FILTER,
    SET_LAST_NAME_FILTER
} from "../actions/filters.action";

const initialFilterState = {
    firstName: '',
    lastName: '',
    function: '',
    experience: null,
    dateOfBirth: null,
};

const filtersReducer = (state = initialFilterState, action) => {
    switch (action.type) {
        case SET_FIRST_NAME_FILTER:
            return {
                ...state,
                firstName: action.payload,
            };
        case SET_LAST_NAME_FILTER:
            return {
                ...state,
                lastName: action.payload,
            };
        case SET_FUNCTION_FILTER:
            return {
                ...state,
                function: action.payload,
            };
        case SET_EXPERIENCE_FILTER:
            return {
                ...state,
                experience: action.payload,
            };
        case SET_DOB_FILTER:
            return {
                ...state,
                dateOfBirth: action.payload,
            };
        default:
            return state;
    }
};

export default filtersReducer;