import { Box, Typography, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material'
import PdfViewer from '../features/PdfViewer/PdfViewer';

const TestElement = (props) => {
    const [data, setData] = useState(null);
    const [leaderBoardData, setLeaderBoardData] = useState(null);
    const [courseData, setCourseData] = useState(null);
    const [recentAssessmentsData, setRecentAssessmentsData] = useState(null);
    const theme = useTheme();
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);


    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };
    const tabContent = [
        // { id: 0, content: <TabPanel>Content for Tab 1</TabPanel> },
        // { id: 1, content: <TabPanel>Content for Tab 2</TabPanel> },
        // // Add more tab content as needed
    ];

    const handleEdit = () => {
        // Logic for handling the edit action
    };

    // Sample data
    const sampleData = [
        { id: 1, name: 'Tab 1', content: 'xyz' },
        { id: 2, name: 'Tab 2', content: 'abc' },
        { id: 3, name: 'Tab 3', content: '123' },
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
                setRecentAssessmentsData(result.recent_assessments);
                console.log(result)
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
                    // padding: '100px'
                }}>
                    {/* <LeaderBoardCard data={leaderBoardData} width='319px' height='425px' /> */}
                    {/* <Courses data={courseData} /> */}
                    {/* <CalendarComponent /> */}
                    {/* <CustomTable /> */}
                    {/* <PdfViewerComponent /> */}
                    {/* <Box width="200px" height={"200px"}>
                        <MuiCustomTableWithSortadnSelect
                            HeaderArr={headerArr}
                            tableData={tableData.assessments}
                            submissionTypesToShowinStudentTable
                        />
                    </Box> */}
                    {/* <Chart recentAssessmentsData={recentAssessmentsData} /> */}
                    {/* <Box width={'500px'} heigh={'500px'}>
                        <ErrorPage />
                    </Box> */}
                    {/* <PdfViewer /> */}
                    {/* <div>
                        <MuiCustomTab
                            value={activeTab}
                            handleTabChange={handleTabChange}
                            data={tabContent}
                        />
                        {tabContent.map(tab => (
                            <div key={tab.id} hidden={activeTab !== tab.id}>
                                {tab.content}
                            </div>
                        ))}
                    </div> */}

                    <PdfViewer />

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