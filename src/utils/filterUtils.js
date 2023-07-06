import moment from 'moment';

const filterData = (data, filter, filterCriteria) => {
    if (!filter) return data;
    return data.filter(filterCriteria);
};

export const filterByFirstName = (data, firstName) =>
    filterData(data, firstName, employee =>
        employee.firstName.toLowerCase().includes(firstName.toLowerCase())
    );

export const filterByLastName = (data, lastName) =>
    filterData(data, lastName, employee =>
        employee.lastName.toLowerCase().includes(lastName.toLowerCase())
    );

export const filterByFunction = (data, func) =>
    filterData(data, func, employee =>
        employee.function.toLowerCase().includes(func.toLowerCase())
    );

export const filterByExperience = (data, experience) =>
    filterData(data, experience, employee => employee.experience == experience);

export const filterByDateOfBirth = (data, dateOfBirth) =>
    filterData(data, dateOfBirth, employee =>
        moment(employee.dateOfBirth, 'D.M.YYYY').isSame(dateOfBirth)
    );

export const sortByColumn = (data, column, direction) => {
    if (!column) return data;
    const directionMultiplier = direction === 'asc' ? 1 : -1;
    return [...data].sort((a, b) => {
        let aValue = a[column];
        let bValue = b[column];

        if (column === 'dateOfBirth') {
            aValue = moment(a[column], 'D.M.YYYY').toDate();
            bValue = moment(b[column], 'D.M.YYYY').toDate();
        }

        return aValue > bValue ? directionMultiplier : -directionMultiplier;
    });
};