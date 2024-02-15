import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dashBoardData: [],
    loading: false,
    error: false,
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        fetchDataRequest: (state) => {
            state.loading = true
            state.error = null
        },
        fetchDataSuccess: (state, action) => {
            state.loading = false
            state.dashBoardData = action.payload
        },
        fetchDataFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } =
    dashboardSlice.actions
export default dashboardSlice.reducer