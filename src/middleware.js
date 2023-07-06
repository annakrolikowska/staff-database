import {fetchEmployees} from './redux/actions/employee.action';
import {
    SET_DOB_FILTER,
    SET_EXPERIENCE_FILTER,
    SET_FIRST_NAME_FILTER,
    SET_FUNCTION_FILTER,
    SET_LAST_NAME_FILTER
} from "./redux/actions/filters.action";
import {SET_SORTING} from "./redux/actions/sorting.actions";
import {SET_CURRENT_PAGE} from "./redux/actions/pagination.action";

const fetchMiddleware = store => next => action => {
    next(action);

    if ([SET_FIRST_NAME_FILTER, SET_LAST_NAME_FILTER, SET_FUNCTION_FILTER, SET_EXPERIENCE_FILTER, SET_DOB_FILTER, SET_SORTING, SET_CURRENT_PAGE].includes(action.type)) {
        store.dispatch(fetchEmployees());
    }
};

export default fetchMiddleware;