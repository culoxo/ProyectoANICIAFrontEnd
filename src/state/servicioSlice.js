import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    pageSize: 10,
    pageIndex: 0,
    searchCriteria: [],
    sort: "",
    sortBy: "",
    servicio: null
};


export const authSlice = createSlice({
    name: 'servicio',
    initialState,
    reducers: {
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
        },
        setPageIndex: (state, action) => {
            state.pageIndex = action.payload;
        },
        setSearchCriteria: (state, action) => {
            state.searchCriteria = action.payload;
        },
        setServicio: (state, action) => {
            state.servicio = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload.direction;
            state.sortBy = action.payload.name;
        },
        resetAllCriteria: (state, action) => {
            state.searchCriteria = [];
            state.sort = "";
            state.sortBy = "";
        },
        resetSearchCriteria: (state, action) => {
            state.searchCriteria = [];
        },
        resetServicio: (state, action) => {
            state.servicio = null;
        },
        resetSort: (state, action) => {
            state.sort = "";
            state.sortBy = "";    
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setPageSize,
    setPageIndex,
    setSearchCriteria,
    setServicio,
    setSort,
    resetAllCriteria,
    resetServicio,
    resetSearchCriteria
} = authSlice.actions

export default authSlice.reducer