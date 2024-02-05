// import axios from 'axios'
import { setTableData } from '../actions/dashboard.actions'

export const getAssessmentdata = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            let endpoint = `https://stagingstudentpython.edwisely.com/reactProject/assessments`
            let options = {
                method: 'GET',
                redirect: 'follow',
            }
            const response = await fetch(endpoint, options)
            //console.log(response)

            if (response?.data?.status !== 200) {
                console.log('error caught')
                throw response
            }

            dispatch(
                setTableData({
                    tableData: response?.data?.assessments,
                    loadingTableData: false,
                    errorLoadingTableData: false,
                })
            )
            return response
        }

        try {
            dispatch(
                setTableData({
                    tableData: [],
                    loadingTableData: true,
                    errorLoadingTableData: false,
                })
            )
            const fetchedData = await fetchData()
            //console.log(fetchedData)
            return fetchedData
        } catch (error) {
            console.log(error)
            dispatch(
                setTableData({
                    tableData: [],
                    loadingTableData: false,
                    errorLoadingTableData: true,
                })
            )
            return error
        }
    }
}
