import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    pageSize: 10,
    pageIndex: 0,
    searchCriteria: [],
    sort: "",
    sortBy: "",
    auditoria: null
};


export const authSlice = createSlice({
    name: 'factura',
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
        setFactura: (state, action) => {
            state.auditoria = action.payload;
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
        resetAuditoria: (state, action) => {
            state.auditoria = null;
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
    setFactura,
    setSort,
    resetAllCriteria,
    resetAuditoria,
    resetSearchCriteria
} = authSlice.actions

export default authSlice.reducer