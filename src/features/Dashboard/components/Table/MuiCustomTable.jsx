import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import MuiCustomTableWithSortandSelect from './MuiCustomTableWithSortandSelect';
import MuiSmallDropDown from '../../../../components/common/MuiSmallDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssessmentData } from '../../../../store/actions/dashboard.actions';

const MuiCustomTable = () => {
    const [uniqueSemesters, setUniqueSemesters] = useState(null)
    const [tableAssessmentsData, setTableAssessmentsData] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const [tableData, setTableData] = useState(null)
    const [dropDownValue, setDropDownValue] = useState('semester 1')
    const { assessmentData, loading, error } = useSelector(
        (state) => state.dashboard
    )
    const dispatch = useDispatch
    console.log(assessmentData);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            return data
        } catch (error) {
            console.error('Error fetching data:', error)
            throw error
        }
    }

    useEffect(() => {
        // dispatch(fetchAssessmentData())
    }, [dispatch])

    const headerArr = [
        { label: 'Subject', isSortable: true, isSelectable: false },
        { label: 'Time Spent', isSortable: true, isSelectable: true },
        { label: 'Submission Type', isSortable: true, isSelectable: false },
        { label: 'Internet Speed', isSortable: true, isSelectable: false },
        { label: 'Rank', isSortable: true, isSelectable: false },
        { label: 'Mark', isSortable: true, isSelectable: false },
    ]

    const sortHandler = (order, key) => {
        console.log(order, key)
        let sortedData = [...tableAssessmentsData]
        console.log(sortedData)

        sortedData.sort((a, b) => {
            const valueA =
                typeof a[key.toLowerCase()] === 'string'
                    ? a[key.toLowerCase()].toLowerCase()
                    : a[key.toLowerCase()]
            const valueB =
                typeof b[key.toLowerCase()] === 'string'
                    ? b[key.toLowerCase()].toLowerCase()
                    : b[key.toLowerCase()]

            if (order === 'asc') {
                return valueA > valueB ? 1 : valueA < valueB ? -1 : 0
            } else if (order === 'des') {
                return valueA < valueB ? 1 : valueA > valueB ? -1 : 0
            } else {
                throw new Error('Invalid sort order. Use "asc" or "des".')
            }
        })
        // console.log(sortedData)

        setTableAssessmentsData(sortedData)

        let sortedFilteredData = [...filteredData]
        sortedFilteredData.sort((a, b) => {
            const valueA =
                typeof a[key.toLowerCase()] === 'string'
                    ? a[key.toLowerCase()].toLowerCase()
                    : a[key.toLowerCase()]
            const valueB =
                typeof b[key.toLowerCase()] === 'string'
                    ? b[key.toLowerCase()].toLowerCase()
                    : b[key.toLowerCase()]

            if (order === 'asc') {
                return valueA > valueB ? 1 : valueA < valueB ? -1 : 0
            } else if (order === 'des') {
                return valueA < valueB ? 1 : valueA > valueB ? -1 : 0
            } else {
                throw new Error('Invalid sort order. Use "asc" or "des".')
            }
        })
        setFilteredData(sortedFilteredData)
    }

    const handleSemesterChange = (semester) => {
        let filteringData = [...tableAssessmentsData]
        if (semester === 0) {
            setFilteredData(filteringData)
            return;
        }
        filteringData = filteringData.filter((item) => {
            console.log(item.semester, semester, item.semester === semester)
            return (item.semester === semester)
        })
        // filteringData.map((row) => {
        //     console.log(row.semester, semester)
        //     return row.semester === semester;
        // });
        // // setFilteredData(filteringData);
        console.log(filteringData);
        setFilteredData(filteringData)
    }


    useEffect(() => {

        const fetchTableDataFromApi = async () => {
            try {
                const result = await fetchData(
                    'https://stagingstudentpython.edwisely.com/reactProject/assessments'
                )
                setTableData(result)
                let rankedTableData = result.assessments
                    ? result.assessments.map((row) => ({
                        ...row,
                        rank:
                            1 +
                            result.assessments.filter(
                                (r) => r.percentage_scored > row.percentage_scored
                            ).length,
                    }))
                    : []
                setTableAssessmentsData(rankedTableData)
                setFilteredData(rankedTableData)
                let uniqueValues = [...new Set(rankedTableData.map(item => item.semester))];
                let semesters = uniqueValues.map(sem => ({
                    name: "semester " + sem,
                    value: sem,
                }))
                semesters = [...semesters, {
                    name: "semesters",
                    value: 0,
                }]
                // semesters.sort((a, b) => {
                //     return a < b;
                // })
                setUniqueSemesters(semesters);
                // console.log(semesters);
            } catch (error) {
                throw error
            }
        }

        fetchTableDataFromApi()

    }, [])

    return (
        <>
            <Stack direction='row'>
                <Typography variant='h5'>Assessments</Typography>
                <Box
                    sx={{
                        position: 'absolute',
                        right: '30vw',
                    }}
                >
                    <MuiSmallDropDown
                        data={uniqueSemesters}
                        onChange={handleSemesterChange}
                        dropDownValue={dropDownValue}
                        setDropDownValue={setDropDownValue}
                    />
                </Box>
            </Stack>
            <MuiCustomTableWithSortandSelect
                HeaderArr={headerArr}
                tableData={filteredData}
                submissionTypesToShowinStudentTable={[1, 2, 3, 4]}
                sortHandler={sortHandler}
                filtered_studentAssessmentList={filteredData}
            />
        </>
    )
}

export default MuiCustomTable