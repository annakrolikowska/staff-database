export const SET_SORTING ='SET_SORTING'

export const setSorting = (column) => ({
    type: SET_SORTING,
    payload: column,
});