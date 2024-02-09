import axios from 'axios';
import {
    fetchCourseDataRequest,
    fetchCourseDataSuccess,
    fetchCourseDataFailure,
} from '../reducers/course.reducers'
export const fetchCourseData = (courseId) => {
    return async (dispatch) => {
        try {
            dispatch(fetchCourseDataRequest());
            const response = await axios.get(`https://stagingstudentpython.edwisely.com/reactProject/courseData?course_id=${courseId}`);
            dispatch(fetchCourseDataSuccess(response.data));
        } catch (error) {
            dispatch(fetchCourseDataFailure(error.message));
        }
    };
};
