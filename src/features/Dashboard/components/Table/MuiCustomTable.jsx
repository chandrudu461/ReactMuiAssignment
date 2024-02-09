import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Stack, Typography, Skeleton } from '@mui/material';
import MuiCustomTableWithSortandSelect from './MuiCustomTableWithSortandSelect';
import MuiSmallDropDown from '../../../../components/common/MuiSmallDropDown';
import { useDispatch, useSelector } from 'react-redux';
import LeftArrow from '../../../../assets/svg/LeftArrow';
import RightArrow from '../../../../assets/svg/RightArrow';
import { fetchAssessmentData } from '../../../../store/actions/dashboard.actions';

const MuiCustomTable = () => {
    const [uniqueSemesters, setUniqueSemesters] = useState(null)
    const [tableAssessmentsData, setTableAssessmentsData] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const [tableData, setTableData] = useState(null)
    const [currentSemester, setCurrentSemester] = useState({
        name: 'Semester 01',
        value: 1,
    })
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

    console.log('us', uniqueSemesters);

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

    const leftClickHandle = () => {
        if (currentSemester.value > 0) {
            setCurrentSemester(prevSemester => ({
                name: `Semester 0${prevSemester.value - 1}`,
                value: prevSemester.value - 1,
            }));
            handleSemesterChange(currentSemester.value - 1)
        }
        console.log('cs', currentSemester)
    }

    const rightClickHandle = () => {
        if (currentSemester.value < uniqueSemesters.length - 1) {
            setCurrentSemester(prevSemester => ({
                name: `Semester 0${prevSemester.value + 1}`,
                value: prevSemester.value + 1,
            }));
            handleSemesterChange(currentSemester.value + 1)
        }
        // console.log(currentSemester)
    }

    const handleSemesterChange = (semester) => {
        let filteringData = [...tableAssessmentsData]
        if (semester === 0) {
            setFilteredData(filteringData)
        }
        else {
            filteringData = filteringData.filter((item) => {
                return (item.semester === semester)
            })
            console.log(filteringData);
            setFilteredData(filteringData)
        }
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
                // setFilteredData(rankedTableData)
                let uniqueValues = [...new Set(rankedTableData.map(item => item.semester))];
                let semesters = uniqueValues.map(sem => ({
                    name: "Semester 0" + sem,
                    value: sem,
                }))
                semesters = [...semesters,
                {
                    name: "All Semesters",
                    value: 0,
                }
                ]
                setUniqueSemesters(semesters);
                let filteringData = rankedTableData.filter((item) => {
                    return (item.semester === currentSemester.value)
                })
                setFilteredData(filteringData);
            } catch (error) {
                throw error
            }
        }

        fetchTableDataFromApi()
    }, [])

    console.log(filteredData);

    return (
        <>
            {loading ? (
                <Skeleton variant="rectangular" width={'100%'} height={400} />
            ) :
                <>
                    <Stack direction='row'>
                        <Typography variant='h5'>Assessments</Typography>
                        <Stack
                            direction={'row'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            spacing={1}
                            sx={{
                                position: 'absolute',
                                right: '35vw',
                            }}
                        >
                            <Box onClick={leftClickHandle} sx={{
                                cursor: 'pointer'
                            }}>
                                <LeftArrow />
                            </Box>
                            <Box>
                                <Typography variant='body9'>
                                    {currentSemester.name == "Semester 00" ? "All Semester" : currentSemester.name}
                                </Typography>
                            </Box>
                            <Box onClick={rightClickHandle} sx={{
                                cursor: 'pointer'
                            }}>
                                <RightArrow />
                            </Box>
                        </Stack>
                    </Stack>
                    <MuiCustomTableWithSortandSelect
                        HeaderArr={headerArr}
                        tableData={filteredData}
                        submissionTypesToShowinStudentTable={[1, 2, 3, 4]}
                        sortHandler={sortHandler}
                        filtered_studentAssessmentList={filteredData}
                    />
                </>
            }
        </>
    )
}

export default MuiCustomTable