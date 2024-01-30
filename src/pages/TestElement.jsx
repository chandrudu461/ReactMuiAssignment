import { Box, Typography, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AssessmentDetailCard from '../components/common/AssessmentDetailCard';
import CalendarComponent from '../components/common/CalendarComponent'
import LeaderBoardCard from '../components/common/LeaderBoardCard';
import Courses from '../components/common/Courses'
import ContinueReadingCard from '../components/common/ContinueReadingCard';
import Units from '../components/common/Units';
import MuiCustomTableWithSortandSelect from '../components/common/MuiCustomTableWithSortandSelect';
import CustomTable from '../components/common/CustomTable'
import { useTheme } from '@mui/material'
const TestElement = (props) => {

    const [data, setData] = useState(null);
    const [leaderBoardData, setLeaderBoardData] = useState(null);
    const [courseData, setCourseData] = useState(null);
    const theme = useTheme();

    const dummyData = [
        {
            id: 1,
            name: 'John Doe',
            class_section_name: 'Class A',
            submission_type: 3,
            total_timespent: 45,
            effective_time_utilization: 75,
            internet_speed: 5,
            submitted_at: '2024-01-30 10:00 AM',
            percentage_scored: 85,
        },
        {
            id: 2,
            name: 'Jane Smith',
            class_section_name: 'Class B',
            submission_type: 1,
            total_timespent: 30,
            effective_time_utilization: 50,
            internet_speed: 2,
            submitted_at: '2024-01-30 09:45 AM',
            percentage_scored: 70,
        },
        // Add more dummy data as needed
    ];

    const dummyHeaderArray = [
        { label: 'Name', isSortable: true, isSelectable: false },
        { label: 'Class', isSortable: false, isSelectable: false },
        { label: 'Submission Type', isSortable: false, isSelectable: true },
        { label: 'Total Time Spent', isSortable: true, isSelectable: false },
        { label: 'Effective Time Utilization', isSortable: true, isSelectable: false },
        { label: 'Internet Quality', isSortable: false, isSelectable: false },
        { label: 'Submitted At', isSortable: true, isSelectable: false },
        { label: 'Score', isSortable: true, isSelectable: false },
    ];


    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:5000/reactProject/dashboardData';

        fetch(apiUrl)
            .then(response => response.json())
            .then(resultData => {
                setData(resultData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
        const fetchDataFromApi = async () => {
            try {
                const result = await fetchData('https://stagingstudentpython.edwisely.com/reactProject/dashboardData');
                setData(result);
                setCourseData(result.courses)
                setLeaderBoardData(result.leaderboard)
            } catch (error) {
                throw error
            }
        };

        fetchDataFromApi();
    }, []);

    return (
        <>
            <div>
                <div style={{
                    // margin: '100px',
                    padding: '100px'
                }}>
                    {/* <LeaderBoardCard data={leaderBoardData} width='319px' height='425px' /> */}
                    <Courses data={courseData} />

                    <Units
                        unit_name={"unit.unit_name"}
                    // topics={unit.topics}
                    // id={unit.unit_id}
                    // onClick={handleUnitClick} 
                    />
                    <CalendarComponent />
                    <CustomTable />
                    {/* <PdfViewerComponent /> */}
                </div>
            </div>

            {/* <ContinueReadingCard
                key={1}
                name={"it's a pdf"}
                url={"www.google.com"}
            /> */}

            {/* <Grid container>
                <Grid item>
                    <Stack>
                        <Box width='897px' bgColor='#ffffff'></Box>
                        <Box width='897px' bgColor='pink'></Box>
                    </Stack>
                </Grid>

                <Grid item>
                    <Stack>
                        <Box width='319px' bgColor='grey'></Box>
                        <Box width='319px' bgColor='blue'></Box>
                        <Box width='319px' bgColor='yellow'></Box>
                    </Stack>
                </Grid>
            </Grid> */}
        </>
    )
}

export default TestElement;