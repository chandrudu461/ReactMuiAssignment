import {
    fetchAssessmentDataRequest,
    fetchAssessmentDataSuccess,
    fetchAssessmentDataFailure
} from '../reducers/assessment.reducers'
import axios from 'axios';

export const fetchAssessmentData = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchAssessmentDataRequest());
            const response = await fetch(`https://stagingstudentpython.edwisely.com/reactProject/assessments`);
            dispatch(fetchAssessmentDataSuccess(response.data));
        } catch (error) {
            dispatch(fetchAssessmentDataFailure(error.message));
        }
    };
};