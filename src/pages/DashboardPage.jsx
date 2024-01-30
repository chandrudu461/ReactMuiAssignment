import React from 'react'
import { Typography, Box } from '@mui/material';
import DashboardChip from '../components/common/DashboardChip';
import CalenderIcon from '../svg/CalenderIcon';
import Stack from '@mui/material/Stack'
import PerformanceIcon from '../svg/PerformanceIcon';
import AssessmentIcon from '../svg/AssessmentIcon';
import AssignmentIcon from '../svg/AssignmentIcon';
import CodingIcon from '../svg/CodingIcon';
import AssessmentDetailCard from '../components/common/AssessmentDetailCard';
import { Grid } from '@mui/material';
import MuiColumnChart from '../components/common/MuiColumnChart';
import { useState, useEffect } from 'react';
import CalenderComponent from '../components/common/CalendarComponent';
import { useTheme } from '@emotion/react';
import UserProfile from '../components/common/UserProfile';
import LeaderBoardCard from '../components/common/LeaderBoardCard'
import Bubble from '../components/common/Bubble'
import QWAColumnChart from '../components/common/QWAColumnChart';
import MuiSmallDropDown from '../components/common/MuiSmallDropDown';
import Courses from '../components/common/Courses';
// import data from '../../src/data/data'
import { useSelector } from "react-redux";

const DashboardPage = () => {
    const [data, setData] = useState(null);
    const [analyticsData, setAnalyticsData] = useState(null)
    const [leaderBoardData, setLeaderBoardData] = useState(null)
    const [recentAssessmentsData, setRecentAssessmentsData] = useState(null)
    const [coursesData, setCourseData] = useState(null)
    const isLoggedIn = useSelector((state) => state.login)
    const theme = useTheme();

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    useEffect(() => {
        // static data
        // setAnalyticsData(data.analytics)
        // setLeaderBoardData(data.leaderboard)

        //api data
        const fetchDataFromApi = async () => {
            try {
                const result = await fetchData('https://stagingstudentpython.edwisely.com/reactProject/dashboardData');
                setData(result);
                setAnalyticsData(result.analytics)
                setLeaderBoardData(result.leaderboard)
                setRecentAssessmentsData(result.recent_assessments)
                setCourseData(result.courses)
            } catch (error) {
                throw error
            }
        };

        fetchDataFromApi();
    }, []);


    if (!isLoggedIn) {
        return (
            <Box padding="150px">
                <Typography>Login before Trying!!!</Typography>
            </Box>
        )
    }

    return (
        <>
            <Box style={{
                backgroundColor: theme.palette.primary[0],
                height: '1500px'
            }}>
                <Box style={{
                    display: 'flex',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    width: '96vw',
                    // border: '2px solid red',
                    marginLeft: '7vw',
                    maxWidth: '80%',
                }}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'var(--Basic-700, #2E3A59)',
                            fontFamily: 'Poppins',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            lineHeight: '28px',
                            marginTop: '93px',
                        }}
                    >
                        Dashboard
                    </Typography>
                </Box>
                <Box style={{
                    marginLeft: '7vw',
                    maxWidth: '100%',
                    marginTop: '20px'
                }}>
                    <Grid container style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Grid item xs>
                            <AssessmentDetailCard icon={<CalenderIcon />} iconBgColor={"#E7EEFE"} title={"Attendance"} contentMagnitude={92} contentType={"percent"} showCountingAnimation />
                        </Grid>
                        <Grid item xs>
                            <AssessmentDetailCard icon={<PerformanceIcon />} iconBgColor={"#E6F2FD"} title={"Avg. Performance"} contentMagnitude={88} contentType={"percent"} showCountingAnimation />
                        </Grid>
                        <Grid item xs>
                            <AssessmentDetailCard icon={<AssessmentIcon />} iconBgColor={"#FFF8EC"} title={"Assessment"} contentMagnitude={45} contentType={"percent"} showCountingAnimation />
                        </Grid>
                        <Grid item xs>
                            <AssessmentDetailCard icon={<AssignmentIcon />} iconBgColor={"#FEECEB"} title={"Assignment"} contentMagnitude={79} contentType={"percent"} showCountingAnimation />
                        </Grid>
                        <Grid item xs>
                            <AssessmentDetailCard icon={<CodingIcon />} iconBgColor={"#EDFAEE"} title={"code"} contentMagnitude={65} contentType={"percent"} showCountingAnimation />
                        </Grid>
                    </Grid>

                    {/* chart grid */}
                    <Stack direction={"column"}>
                        <Grid container >
                            <Grid item xs={8.3}
                                sx={{
                                    // border: '1px solid red',
                                    height: '352px',
                                    marginTop: '28px'
                                }}>

                                <Stack spacing={2} direction='row' sx={{
                                    marginLeft: '23px',
                                    marginTop: '16px',
                                }}>
                                    <Stack sx={{
                                        width: '50%',
                                    }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#161C24',
                                                fontFamily: 'Poppins',
                                                fontSize: '20px',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                lineHeight: '28px',
                                            }}
                                        >Recent Assessments</Typography>
                                    </Stack>
                                    <Stack direction='row' spacing={2} sx={{
                                        justifyContent: 'flex-end',
                                    }}>
                                        <Bubble color={'#0B58F5'} />
                                        <Typography>Attempted</Typography>
                                        <Bubble color={'#F44336'} />
                                        <Typography>Unattempted</Typography>
                                        <MuiSmallDropDown data={[{ name: 'subject 01', color: 'red' }, { name: 'subject 01', color: 'red' }, { name: 'subject 01', color: 'red' }, { name: 'subject 01', color: 'red' }]} />
                                    </Stack>
                                </Stack>

                                <Stack direction='column'>
                                    {recentAssessmentsData && recentAssessmentsData.analysis && <MuiColumnChart
                                        series={[
                                            {
                                                name: recentAssessmentsData.title,
                                                data: recentAssessmentsData.analysis.map(item => Math.floor(item?.percentage))
                                            }
                                        ]}
                                        categories={recentAssessmentsData.analysis.map(item => item?.name)}
                                        yaxisTitle={"Tests"}
                                        xaxisTitle={"Performance"}
                                        width={'100%'}
                                        height={'230px'}
                                        primaryBarColor={theme.palette.primary[700]}
                                    />}
                                    <Box
                                        sx={{
                                            height: '535px',
                                            border: '1px solid red'
                                        }}
                                    ></Box>
                                    <Courses data={coursesData} />
                                </Stack>
                            </Grid>

                            <Grid item xs={3.7}
                                style={{
                                    height: '108px',
                                    marginTop: '28px',
                                }}>
                                <Stack spacing={'12px'} direction={'column'} sx={{
                                    padding: '10px',
                                }}>
                                    <Typography
                                        style={{
                                            fontSize: '20px',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            lineHeight: '28px',
                                        }}
                                    > User Profile </Typography>
                                    <UserProfile name={'Maharrm Hasanli'} email={'maga.hesenli@gmail.com'} />
                                    <CalenderComponent />
                                    <LeaderBoardCard data={leaderBoardData} width='319px' height='425px' />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box >
            </Box >
        </>
    )
}

export default DashboardPage