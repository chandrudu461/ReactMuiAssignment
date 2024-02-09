import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    courseData: [],
    loading: false,
    error: null,
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        fetchCourseDataRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchCourseDataSuccess: (state, action) => {
            state.loading = false;
            state.courseData = action.payload;
        },
        fetchCourseDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchCourseDataRequest,
    fetchCourseDataSuccess,
    fetchCourseDataFailure,
} = courseSlice.actions;

export default courseSlice.reducer;
