export const SET_FIRST_NAME_FILTER = 'SET_FIRST_NAME_FILTER'
export const SET_LAST_NAME_FILTER = 'SET_LAST_NAME_FILTER'
export const SET_FUNCTION_FILTER = 'SET_FUNCTION_FILTER'
export const SET_EXPERIENCE_FILTER = 'SET_EXPERIENCE_FILTER'
export const SET_DOB_FILTER = 'SET_DOB_FILTER'


export const setFirstNameFilter = (firstName) => ({
    type: SET_FIRST_NAME_FILTER,
    payload: firstName,
});

export const setLastNameFilter = (lastName) => ({
    type: SET_LAST_NAME_FILTER,
    payload: lastName,
});

export const setFunctionFilter = (func) => ({
    type: SET_FUNCTION_FILTER,
    payload: func,
});

export const setExperienceFilter = (experience) => ({
    type: SET_EXPERIENCE_FILTER,
    payload: experience,
});

export const setDateOfBirthFilter = (date) => ({
    type: SET_DOB_FILTER,
    payload: date,
});

