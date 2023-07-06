export const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
export const SET_MAX_PAGE_NUM='SET_MAX_PAGE_NUM';


export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
});

export const setMaxPageNum = (pages) => ({
    type: SET_MAX_PAGE_NUM,
    payload: pages
});