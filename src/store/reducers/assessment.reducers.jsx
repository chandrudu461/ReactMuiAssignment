import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    assessmentData: [],
    loading: false,
    error: null,
};

const assessmentSlice = createSlice({
    name: 'assessment',
    initialState,
    reducers: {
        fetchAssessmentDataRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchAssessmentDataSuccess: (state, action) => {
            state.loading = false;
            state.assessmentData = action.payload;
        },
        fetchAssessmentDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchAssessmentDataRequest,
    fetchAssessmentDataSuccess,
    fetchAssessmentDataFailure,
} = assessmentSlice.actions;

export default assessmentSlice.reducer;