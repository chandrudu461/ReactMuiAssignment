import React from 'react'
import { Typography, Box, Drawer } from '@mui/material'
import DashboardChip from '../components/common/DashboardChip'
import CalenderIcon from '../assets/svg/CalenderIcon'
import Stack from '@mui/material/Stack'
import PerformanceIcon from '../assets/svg/PerformanceIcon'
import AssessmentIcon from '../assets/svg/AssessmentIcon'
import AssignmentIcon from '../assets/svg/AssignmentIcon'
import CodingIcon from '../assets/svg/CodingIcon'
import AssessmentDetailCard from '../features/Dashboard/components/Assessments/AssessmentDetailCard'
import { Grid } from '@mui/material'
import MuiColumnChart from '../components/common/MuiColumnChart'
import { useState, useEffect } from 'react'
import CalenderComponent from '../components/common/CalendarComponent'
import { useTheme } from '@emotion/react'
import UserProfile from '../components/common/UserProfile'
import LeaderBoardCard from '../components/common/LeaderBoardCard'
import Bubble from '../components/common/Bubble'
import MuiSmallDropDown from '../components/common/MuiSmallDropDown'
import Courses from '../components/common/Courses'
// import data from '../../src/data/data'
import { useDispatch, useSelector } from 'react-redux'
import MuiCustomTableWithSortandSelect from '../components/common/MuiCustomTableWithSortandSelect'
import LeaderBoardForDrawer from '../components/common/LeaderBoardForDrawer'
import Assignments from '../features/Dashboard/components/Assessments/Assessments';
import Chart from '../features/Dashboard/components/Chart/Chart';

const DashboardPage = () => {
    const [data, setData] = useState(null)
    const [analyticsData, setAnalyticsData] = useState(null)
    const [leaderBoardData, setLeaderBoardData] = useState(null)
    const [recentAssessmentsData, setRecentAssessmentsData] = useState(null)
    const [coursesData, setCourseData] = useState(null)
    const isLoggedIn = useSelector((state) => state.login.login)
    const theme = useTheme()
    const [tableData, setTableData] = useState(null)
    const [tableAssessmentsData, setTableAssessmentsData] = useState(null)
    const [CurrentSemester, setCurrentSemester] = useState(null)
    const [semesterList, setsemesterList] = useState([])
    const [tableDataWithRank, setTableDataWithRank] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const [dropDownValue, setDropDownValue] = useState('semester 1')
    const [drawerState, setDrawerState] = useState(null)
    const [uniqueSemesters, setUniqueSemesters] = useState(null)
    const tableDataRedux = useSelector(state => state.dashboard);
    const dispatch = useDispatch()

    console.group("tableDataRedux : ", tableDataRedux);

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

    const headerArr = [
        { label: 'Subject', isSortable: true, isSelectable: false },
        { label: 'Time Spent', isSortable: true, isSelectable: true },
        { label: 'Submission Type', isSortable: true, isSelectable: false },
        { label: 'Internet Speed', isSortable: true, isSelectable: false },
        { label: 'Rank', isSortable: true, isSelectable: false },
        { label: 'Mark', isSortable: true, isSelectable: false },
    ]

    useEffect(() => {
        // static data
        // setAnalyticsData(data.analytics)
        // setLeaderBoardData(data.leaderboard)

        //api data
        const fetchDataFromApi = async () => {
            try {
                const result = await fetchData(
                    'https://stagingstudentpython.edwisely.com/reactProject/dashboardData'
                )
                setData(result)
                console.log(result);
                setAnalyticsData(result.analytics)
                setLeaderBoardData(result.leaderboard)
                setRecentAssessmentsData(result.recent_assessments)
                setCourseData(result.courses)
            } catch (error) {
                throw error
            }
        }
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


        fetchDataFromApi()
        fetchTableDataFromApi()
        console.log('assessments data : ', data);
    }, [])

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

    if (!isLoggedIn) {
        return (
            <Box padding='150px'>
                <Typography>Login before Trying!!!</Typography>
            </Box>
        )
    }

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
        console.log(sortedData)

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

    const toggleDrawer = () => {
        setDrawerState(!drawerState)
    }

    return (
        <>
            <Box
                style={{
                    backgroundColor: theme.palette.primary[0],
                    height: '1500px',
                }}
            >
                <Box
                    style={{
                        display: 'flex',
                        // justifyContent: 'center',
                        alignItems: 'center',
                        width: '96vw',
                        // border: '2px solid red',
                        marginLeft: '7vw',
                        maxWidth: '80%',
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{
                            // color: 'var(--Basic-700, #2E3A59)',
                            // fontFamily: 'Poppins',
                            // fontSize: '20px',
                            // fontStyle: 'normal',
                            // fontWeight: 600,
                            // lineHeight: '28px',
                            marginTop: '93px',
                        }}
                    >
                        Dashboard
                    </Typography>
                </Box>
                <Box
                    style={{
                        marginLeft: '7vw',
                        maxWidth: '100%',
                        marginTop: '20px',
                    }}
                >
                    <Grid
                        container
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Assignments />
                    </Grid>

                    {/* chart grid */}
                    <Stack direction={'column'}>
                        <Grid container>
                            <Grid
                                item
                                xs={8.3}
                                sx={{
                                    // border: '1px solid red',
                                    height: '352px',
                                    marginTop: '28px',
                                }}
                            >

                                <Chart recentAssessmentsData={recentAssessmentsData} />

                                <Box
                                    sx={{
                                        height: '535px',
                                    }}
                                >
                                    <Box>
                                        <Stack direction='row'>
                                            <Typography>Assessments</Typography>
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
                                    </Box>
                                    <MuiCustomTableWithSortandSelect
                                        HeaderArr={headerArr}
                                        tableData={filteredData}
                                        submissionTypesToShowinStudentTable={[1, 2, 3, 4]}
                                        sortHandler={sortHandler}
                                        filtered_studentAssessmentList={filteredData}
                                    />
                                </Box>
                                <Courses data={coursesData} />
                            </Grid>

                            <Grid
                                item
                                xs={3.7}
                                style={{
                                    height: '108px',
                                    marginTop: '28px',
                                }}
                            >
                                <Stack
                                    spacing={'12px'}
                                    direction={'column'}
                                    sx={{
                                        padding: '10px',
                                    }}
                                >
                                    <Typography
                                        style={{
                                            fontSize: '20px',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            lineHeight: '28px',
                                        }}
                                    >
                                        {' '}
                                        User Profile{' '}
                                    </Typography>
                                    <UserProfile
                                        name={'Maharrm Hasanli'}
                                        email={'maga.hesenli@gmail.com'}
                                    />
                                    <CalenderComponent />
                                    <Box
                                        onClick={toggleDrawer}
                                        sx={{
                                            '&:hover': {
                                                cursor: 'pointer',
                                            },
                                        }}
                                    >
                                        <LeaderBoardCard
                                            data={leaderBoardData}
                                            width='319px'
                                            height='425px'
                                        />
                                    </Box>
                                    <Drawer
                                        anchor='right'
                                        open={drawerState}
                                        onClose={toggleDrawer}
                                        sx={{
                                            '& .MuiDrawer-paper': {
                                                width: '30%',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '100%',
                                                p: 2,
                                            }}
                                        >
                                            <Typography variant='h6'>Leaderboard</Typography>
                                            <LeaderBoardForDrawer
                                                data={leaderBoardData}
                                                width='100%'
                                                height='100%'
                                            />
                                        </Box>
                                    </Drawer>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default DashboardPage
