import React from 'react'
import { Typography, Box, Drawer } from '@mui/material'
import Stack from '@mui/material/Stack'
import { Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import CalenderComponent from '../features/Dashboard/components/Calender/CalendarComponent'
import { useTheme } from '@emotion/react'
import LeaderBoardCard from '../features/Dashboard/components/LeaderBoard/LeaderBoardCard'
import Courses from '../features/Dashboard/courses/Courses'
import UserProfileComponent from '../features/Dashboard/components/UserProfile/UserProfileComponent'
// import data from '../../src/data/data'
import { useDispatch, useSelector } from 'react-redux'
import LeaderBoardForDrawer from '../features/Dashboard/components/LeaderBoard/LeaderBoardForDrawer'
import Assignments from '../features/Dashboard/components/Assessments/Assessments';
import Chart from '../features/Dashboard/components/Chart/Chart';
import { fetchDashboardData } from '../store/actions/dashboard.actions'
import MuiCustomTable from '../features/Dashboard/components/Table/MuiCustomTable'
import LeaderBoard from '../features/Dashboard/components/LeaderBoard/LeaderBoard'

const DashboardPage = () => {
    const [data, setData] = useState(null)
    const [analyticsData, setAnalyticsData] = useState(null)
    const [leaderBoardData, setLeaderBoardData] = useState(null)
    const [recentAssessmentsData, setRecentAssessmentsData] = useState(null)
    const [coursesData, setCourseData] = useState(null)
    const isLoggedIn = useSelector((state) => state.login.login)
    const theme = useTheme()
    const [CurrentSemester, setCurrentSemester] = useState(null)
    const [semesterList, setsemesterList] = useState([])
    const [tableDataWithRank, setTableDataWithRank] = useState(null)
    const tableDataRedux = useSelector(state => state.dashboard);
    const { dashBoardData, loading, error } = useSelector(
        (state) => state.dashboard
    )
    const dispatch = useDispatch()
    // console.log("tableDataRedux : ", tableDataRedux);

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
        dispatch(fetchDashboardData())
    }, [dispatch])

    console.log('dashboard', dashBoardData);

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

        fetchDataFromApi()
    }, [])

    if (!isLoggedIn) {
        return (
            <Box padding='150px'>
                <Typography>Login before Trying!!!</Typography>
            </Box>
        )
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
                            // marginLeft: '18px'
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
                        <Assignments loading={loading} />
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

                                <Chart recentAssessmentsData={dashBoardData.recent_assessments} loading={loading} />

                                <Box
                                    sx={{
                                        height: '535px',
                                    }}
                                >
                                    <MuiCustomTable />
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
                                    <UserProfileComponent />
                                    <CalenderComponent />
                                    <LeaderBoard leaderBoardData={leaderBoardData} />
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
