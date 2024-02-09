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
import { fetchCourseData } from '../store/actions/course.actions'

const DashboardPage = () => {
    const isLoggedIn = localStorage.getItem("login");
    const theme = useTheme()
    const { dashBoardData, loading, error } = useSelector(
        (state) => state.dashboard
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDashboardData())
    }, [dispatch])

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
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {loading ? (
                    <Skeleton width={1} />
                ) :
                    <Box
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            marginLeft: '98px',
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
                }
                <Box
                    style={{
                        marginLeft: '94px',
                        maxWidth: '100%',
                        marginTop: '20px',
                    }}
                >
                    <Grid
                        container
                        spacing={3}
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap'
                            // justifyContent: 'space-between',
                        }}
                    >
                        <Assignments data={dashBoardData.analytics} loading={loading} />
                    </Grid>

                    {/* <Stack direction={'column'}> */}
                    <Stack direction={'row'} display={'flex'} justifyContent={'space-between'} >
                        <Stack
                            width={'65%'}
                            sx={{
                                marginTop: '28px',
                                margniLeft: '20px'
                            }}
                        >
                            <CustomCard height='352px'>
                                <Chart recentAssessmentsData={dashBoardData.recent_assessments} loading={loading} />
                            </CustomCard>
                            <Box marginTop={'21px'} >
                                <CustomCard height='535px'>
                                    <MuiCustomTable loading={loading} />
                                </CustomCard>
                            </Box>
                        </Stack>
                        <Stack
                            spacing={'12px'}
                            direction={'column'}
                            sx={{
                                padding: '10px',
                                marginTop: '28px',
                            }}
                        >
                            <UserProfileComponent link={dashBoardData.profile_picture} email={dashBoardData.email} name={dashBoardData.name} loading={loading} />
                            <CalenderComponent loading={loading} />
                            <LeaderBoard leaderBoardData={dashBoardData.leaderboard} loading={loading} />
                        </Stack>

                    </Stack>
                    <Courses data={dashBoardData.courses} loading={loading} />
                </Box>
            </Box >
        </>
    )
}

export default DashboardPage
