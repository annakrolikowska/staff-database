import {SET_CURRENT_PAGE, SET_MAX_PAGE_NUM} from "../actions/pagination.action";

const initialState = {
    currentPage: 1,
    resultsPerPage: 5,
    maxPageNum: null
};

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };
        case SET_MAX_PAGE_NUM:
            return {
                ...state,
                maxPageNum: action.payload
            };
        default:
            return state;
    }
};

export default paginationReducer;