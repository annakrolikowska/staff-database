import { combineReducers } from 'redux';
import employeeReducer from './reducers/employee.reducer';
import filtersReducer from "./reducers/filters.reducer";
import sortingReducer from "./reducers/sorting.reducer";
import paginationReducer from "./reducers/pagination.reducer";

const rootReducer = combineReducers({
    employeeReducer,
    filtersReducer,
    sortingReducer,
    paginationReducer
});

export default rootReducer;