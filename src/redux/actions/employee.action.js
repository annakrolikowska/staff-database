import {setMaxPageNum} from "./pagination.action";
import {
    filterByDateOfBirth,
    filterByExperience,
    filterByFirstName,
    filterByFunction,
    filterByLastName, sortByColumn
} from "../../utils/filterUtils";


export const setEmployees = (employees) => ({
    type: 'SET_EMPLOYEES',
    payload: employees
});


export const fetchEmployees = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch('http://localhost:8080/employees');
            let data = await response.json();

            const { firstName, lastName, function: func, experience, dateOfBirth } = getState().filtersReducer;
            const { column, direction } = getState().sortingReducer;
            const { currentPage, resultsPerPage } = getState().paginationReducer;

            data = filterByFirstName(data, firstName);
            data = filterByLastName(data, lastName);
            data = filterByFunction(data, func);
            data = filterByExperience(data, experience);
            data = filterByDateOfBirth(data, dateOfBirth);

            data = sortByColumn(data, column, direction);

            const maxPageNum = Math.ceil(data.length / resultsPerPage);
            dispatch(setMaxPageNum(maxPageNum));

            const startIndex = (currentPage - 1) * resultsPerPage;
            const endIndex = startIndex + resultsPerPage;
            data = data.slice(startIndex, endIndex);

            dispatch(setEmployees(data));
        } catch (error) {
            console.error('Error:', error);
            dispatch(setEmployees([]));
        }
    };
};