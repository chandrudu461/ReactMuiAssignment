import React from 'react'
import { Typography, Box, Button, Skeleton } from '@mui/material'
import Stack from '@mui/material/Stack'
import { Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import CalenderComponent from '../features/Dashboard/components/Calender/CalendarComponent'
import { useTheme } from '@emotion/react'
import LeaderBoardCard from '../features/Dashboard/components/LeaderBoard/LeaderBoardCard'
import Courses from '../features/Dashboard/components/courses/Courses'
import UserProfileComponent from '../features/Dashboard/components/UserProfile/UserProfileComponent'
// import data from '../../src/data/data'
import { useDispatch, useSelector } from 'react-redux'
import CustomCard from '../components/common/CustomCard'
import LeaderBoardForDrawer from '../features/Dashboard/components/LeaderBoard/LeaderBoardForDrawer'
import Assignments from '../features/Dashboard/components/Assessments/Assessments';
import Chart from '../features/Dashboard/components/Chart/Chart';
import { fetchDashboardData } from '../store/actions/dashboard.actions'
import MuiCustomTable from '../features/Dashboard/components/Table/MuiCustomTable'
import LeaderBoard from '../features/Dashboard/components/LeaderBoard/LeaderBoard'
import { Link } from 'react-router-dom'
import withSidebarAndHeader from '../components/HOC/withSideBarAndHeader'

const DashboardPage = () => {
    const isLoggedIn = localStorage.getItem("login");
    const theme = useTheme()
    const { dashBoardData, loading, error } = useSelector(
        (state) => state.dashboard
    )
    const dispatch = useDispatch()

    // const fetchData = async (url) => {
    //     try {
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         return data
    //     } catch (error) {
    //         console.error('Error fetching data:', error)
    //         throw error
    //     }
    // }


    useEffect(() => {
        dispatch(fetchDashboardData())
    }, [dispatch])

    // useEffect(() => {
    //     // static data
    //     // setAnalyticsData(data.analytics)
    //     // setLeaderBoardData(data.leaderboard)

    //     //api data
    //     const fetchDataFromApi = async () => {
    //         try {
    //             const result = await fetchData(
    //                 'https://stagingstudentpython.edwisely.com/reactProject/dashboardData'
    //             )
    //             setData(result)
    //             console.log(result);
    //             setAnalyticsData(result.analytics)
    //             setLeaderBoardData(result.leaderboard)
    //             setRecentAssessmentsData(result.recent_assessments)
    //             setCourseData(result.courses)
    //         } catch (error) {
    //             throw error
    //         }
    //     }

    //     fetchDataFromApi()
    // }, [])

    if (!isLoggedIn) {
        return (
            <Stack padding='150px' direction={'row'} spacing={3}>
                <Typography>Login before Trying!!!</Typography>
                <Link to='/'>
                    <Button variant='contained'>Login</Button>
                </Link>
            </Stack >
        )
    }
    return (
        <>
            <Box
                style={{
                    backgroundColor: theme.palette.primary[0],
                    width: '100%',
                    flexDirection: 'column',
                    padding: '1rem'
                }}
            >
                <Box
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{
                            marginTop: '12px',
                        }}
                    >
                        Dashboard
                    </Typography>
                </Box>

                <Box
                    style={{
                        width: '100%',
                        marginTop: '20px',
                    }}
                >
                    <Grid
                        container
                        justifyContent={'space-between'}
                        alignItems='center'
                        style={{
                            flexWrap: 'wrap'
                            // justifyContent: 'space-between',
                        }}
                    >
                        <Assignments data={dashBoardData.analytics} loading={loading} />
                    </Grid>

                    <Stack direction={'column'}>
                        <Stack direction={'row'}  >
                            <Stack
                                sx={{
                                    maxWidth: '1000px',
                                    marginTop: '28px',
                                    margniLeft: '20px',
                                    minWidth: '550px',
                                    '@media (min-width: 1200px)': {
                                        width: '100%',
                                    }
                                }}

                            >
                                <CustomCard height='352px'>
                                    <Chart recentAssessmentsData={dashBoardData.recent_assessments} loading={loading} />
                                </CustomCard>
                                <Box marginTop={'21px'} >
                                    <CustomCard>
                                        <MuiCustomTable />
                                    </CustomCard>
                                </Box>
                            </Stack>
                            <Stack
                                spacing={'12px'}
                                direction={'column'}
                                sx={{
                                    width: '400px',
                                    // width: '100%',
                                    // padding: '10px',
                                    marginTop: '28px',
                                    // width: '30%',
                                    // width: '319px',
                                    minWidth: '260px',
                                    padding: '0 0 22px 22px ',
                                    // maxWidth: '319px'
                                }}
                            >
                                {loading ?
                                    <> <Skeleton variant='rectangular' width={320} height={100} />
                                        <Skeleton variant='rectangular' width={320} height={300} />
                                    </>
                                    :
                                    <>
                                        <Box>
                                            <UserProfileComponent link={dashBoardData.profile_picture} email={dashBoardData.email} name={dashBoardData.name} width='400px' />
                                        </Box>
                                        <Box sx={{
                                            marginTop: '30px'
                                        }}>
                                            <CalenderComponent />
                                        </Box>
                                    </>
                                }
                                <Box sx={{
                                    marginTop: '30px'
                                }}>
                                    <LeaderBoard leaderBoardData={dashBoardData.leaderboard} loading={loading} />
                                </Box>
                            </Stack>

                        </Stack>
                        <Courses data={dashBoardData.courses} />
                    </Stack>

                </Box>
            </Box >
        </>
    )
}

export default withSidebarAndHeader(DashboardPage)
