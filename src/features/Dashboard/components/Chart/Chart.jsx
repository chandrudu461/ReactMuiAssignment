import React, { useState } from 'react';
import { Skeleton, Stack, Typography, Box } from '@mui/material';
import Bubble from '../../../../components/common/Bubble';
import MuiSmallDropDown from '../../../../components/common/MuiSmallDropDown';
import MuiColumnChart from '../../../../components/common/MuiColumnChart';
import { useTheme } from '@mui/material';

const Chart = ({ recentAssessmentsData, loading }) => {
    const theme = useTheme();
    const [selectedSubject, setSelectedSubject] = useState(null);

    const handleSubjectChange = (subject) => {
        setSelectedSubject(subject);
    };

    const getChartData = () => {
        const selectedSubjectData = recentAssessmentsData?.subjects.find(sub => sub.name === selectedSubject);
        if (!selectedSubjectData) return { categories: [], series: [] };

        const categories = selectedSubjectData.tests.map(test => test.name);
        const series = [{
            name: selectedSubject,
            data: selectedSubjectData.tests.map(test => test.percentage)
        }];

        return { categories, series };
    };

    const subjects = [
        { value: 'Web Technologies', name: 'Web Technologies' },
        { value: 'Machine Learning', name: 'Machine Learning' },
        { value: 'Data Structures and Algorithms', name: 'Data Structures and Algorithms' },
        { value: 'Database Management Systems', name: 'Database Management Systems' },
    ];

    const { categories, series } = getChartData();

    return (
        <>
            {loading ? (
                <Skeleton variant='rectangular' height={200} animation="wave" />
            ) : (
                <>
                    <Stack
                        spacing={2}
                        direction='row'
                        sx={{
                            marginLeft: '23px',
                            marginTop: '16px',
                        }}
                    >
                        <Stack
                            sx={{
                                width: '50%',
                            }}
                        >
                            <Typography
                                variant='h5'
                                sx={{
                                    // color: '#161C24',
                                    // fontFamily: 'Poppins',
                                    // fontSize: '20px',
                                    // fontStyle: 'normal',
                                    // fontWeight: 500,
                                    // lineHeight: '28px',
                                }}
                            >
                                Recent Assessments
                            </Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            spacing={2}
                            sx={{
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Box sx={{
                                marginTop: '0px'
                            }}>
                                <Bubble color={'#0B58F5'} />
                            </Box>
                            <Box>
                                <Typography variant='body9'>Attempted</Typography>
                            </Box>
                            <Box sx={{
                                marginTop: '0px'
                            }}>
                                <Bubble color={'#F44336'} />
                            </Box>
                            <Box>
                                <Typography variant='body9'>Unattempted</Typography>
                            </Box>
                            <MuiSmallDropDown
                                data={subjects}
                                onChange={handleSubjectChange}
                                dropDownValue={selectedSubject}
                                setDropDownValue={setSelectedSubject}
                                disable={false}
                            />
                        </Stack>
                    </Stack>
                    <Stack direction='column'>
                        <MuiColumnChart
                            series={series}
                            categories={categories}
                            yaxisTitle={'Tests'}
                            xaxisTitle={'Performance'}
                            width={'100%'}
                            height={'230px'}
                            primaryBarColor={theme.palette.primary[700]}
                        />
                    </Stack>
                </>
            )}
        </>
    )
}

export default Chart;
