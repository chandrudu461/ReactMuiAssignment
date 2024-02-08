import axios from 'axios'
import {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataFailure,
} from '../reducers/dashboard.reducers'

export const fetchDashboardData = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchDataRequest())
            const response = await axios.get(
                'https://stagingstudentpython.edwisely.com/reactProject/dashboardData'
            )
            dispatch(fetchDataSuccess(response.data))
        } catch (error) {
            dispatch(fetchDataFailure(error.message))
        }
    }
}

export const fetchAssessmentData = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchDataRequest())
            const response = await axios.get(
                'https://stagingstudentpython.edwisely.com/reactProject/assessments'
            )
            dispatch(fetchDataSuccess(response.data))
        } catch (error) {
            dispatch(fetchDataFailure(error.message))
        }
    }
}
