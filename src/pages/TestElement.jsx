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
import MuiCustomTableWithSortadnSelect from '../components/common/MuiCustomTableWithSortandSelect'
const TestElement = (props) => {
    const [data, setData] = useState(null);
    const [leaderBoardData, setLeaderBoardData] = useState(null);
    const [courseData, setCourseData] = useState(null);
    const theme = useTheme();

    const tableData = {
        "status": 200,
        "message": "Successfully fetched the data",
        "assessments": [
            {
                "subject": "Subject 01",
                "semester": 1,
                "total_timespent": 32,
                "submission_type": 1,
                "internet_speed": 1,
                "percentage_scored": 39,
                "attempted": 1
            },
            {
                "subject": "Subject 02",
                "semester": 2,
                "total_timespent": 0,
                "submission_type": 3,
                "internet_speed": 7,
                "percentage_scored": 11,
                "attempted": 1
            },
            {
                "subject": "Subject 03",
                "semester": 1,
                "total_timespent": 29,
                "submission_type": 1,
                "internet_speed": 1,
                "percentage_scored": 83,
                "attempted": 1
            },
            {
                "subject": "Subject 04",
                "semester": 2,
                "total_timespent": 5,
                "submission_type": 4,
                "internet_speed": 2,
                "percentage_scored": 17,
                "attempted": 1
            },
            {
                "subject": "Subject 05",
                "semester": 2,
                "total_timespent": 96,
                "submission_type": 3,
                "internet_speed": 2,
                "percentage_scored": 2,
                "attempted": 1
            },
            {
                "subject": "Subject 06",
                "semester": 2,
                "total_timespent": 30,
                "submission_type": 4,
                "internet_speed": 10,
                "percentage_scored": 68,
                "attempted": 1
            },
            {
                "subject": "Subject 07",
                "semester": 2,
                "total_timespent": 55,
                "submission_type": 1,
                "internet_speed": 5,
                "percentage_scored": 80,
                "attempted": 1
            },
            {
                "subject": "Subject 08",
                "semester": 1,
                "total_timespent": 9,
                "submission_type": 1,
                "internet_speed": 4,
                "percentage_scored": 96,
                "attempted": 1
            },
            {
                "subject": "Subject 09",
                "semester": 3,
                "total_timespent": 15,
                "submission_type": 1,
                "internet_speed": 10,
                "percentage_scored": 97,
                "attempted": 1
            },
            {
                "subject": "Subject 10",
                "semester": 1,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 11",
                "semester": 2,
                "total_timespent": 7,
                "submission_type": 1,
                "internet_speed": 4,
                "percentage_scored": 59,
                "attempted": 1
            },
            {
                "subject": "Subject 12",
                "semester": 3,
                "total_timespent": 67,
                "submission_type": 2,
                "internet_speed": 8,
                "percentage_scored": 89,
                "attempted": 1
            },
            {
                "subject": "Subject 13",
                "semester": 3,
                "total_timespent": 14,
                "submission_type": 4,
                "internet_speed": 9,
                "percentage_scored": 47,
                "attempted": 1
            },
            {
                "subject": "Subject 14",
                "semester": 3,
                "total_timespent": 49,
                "submission_type": 3,
                "internet_speed": 6,
                "percentage_scored": 79,
                "attempted": 1
            },
            {
                "subject": "Subject 15",
                "semester": 3,
                "total_timespent": 90,
                "submission_type": 1,
                "internet_speed": 2,
                "percentage_scored": 12,
                "attempted": 1
            },
            {
                "subject": "Subject 16",
                "semester": 3,
                "total_timespent": 88,
                "submission_type": 1,
                "internet_speed": 8,
                "percentage_scored": 13,
                "attempted": 1
            },
            {
                "subject": "Subject 17",
                "semester": 1,
                "total_timespent": 37,
                "submission_type": 2,
                "internet_speed": 1,
                "percentage_scored": 11,
                "attempted": 1
            },
            {
                "subject": "Subject 18",
                "semester": 2,
                "total_timespent": 95,
                "submission_type": 4,
                "internet_speed": 1,
                "percentage_scored": 54,
                "attempted": 1
            },
            {
                "subject": "Subject 19",
                "semester": 1,
                "total_timespent": 82,
                "submission_type": 2,
                "internet_speed": 2,
                "percentage_scored": 4,
                "attempted": 1
            },
            {
                "subject": "Subject 20",
                "semester": 1,
                "total_timespent": 40,
                "submission_type": 1,
                "internet_speed": 6,
                "percentage_scored": 11,
                "attempted": 1
            },
            {
                "subject": "Subject 21",
                "semester": 3,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 22",
                "semester": 3,
                "total_timespent": 0,
                "submission_type": 2,
                "internet_speed": 1,
                "percentage_scored": 41,
                "attempted": 1
            },
            {
                "subject": "Subject 23",
                "semester": 1,
                "total_timespent": 38,
                "submission_type": 4,
                "internet_speed": 6,
                "percentage_scored": 82,
                "attempted": 1
            },
            {
                "subject": "Subject 24",
                "semester": 3,
                "total_timespent": 65,
                "submission_type": 2,
                "internet_speed": 7,
                "percentage_scored": 67,
                "attempted": 1
            },
            {
                "subject": "Subject 25",
                "semester": 1,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 26",
                "semester": 2,
                "total_timespent": 18,
                "submission_type": 3,
                "internet_speed": 7,
                "percentage_scored": 77,
                "attempted": 1
            },
            {
                "subject": "Subject 27",
                "semester": 3,
                "total_timespent": 40,
                "submission_type": 1,
                "internet_speed": 9,
                "percentage_scored": 50,
                "attempted": 1
            },
            {
                "subject": "Subject 28",
                "semester": 1,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 29",
                "semester": 2,
                "total_timespent": 95,
                "submission_type": 4,
                "internet_speed": 5,
                "percentage_scored": 64,
                "attempted": 1
            },
            {
                "subject": "Subject 30",
                "semester": 1,
                "total_timespent": 72,
                "submission_type": 1,
                "internet_speed": 2,
                "percentage_scored": 11,
                "attempted": 1
            },
            {
                "subject": "Subject 31",
                "semester": 3,
                "total_timespent": 56,
                "submission_type": 4,
                "internet_speed": 3,
                "percentage_scored": 96,
                "attempted": 1
            },
            {
                "subject": "Subject 32",
                "semester": 3,
                "total_timespent": 19,
                "submission_type": 3,
                "internet_speed": 3,
                "percentage_scored": 68,
                "attempted": 1
            },
            {
                "subject": "Subject 33",
                "semester": 3,
                "total_timespent": 64,
                "submission_type": 4,
                "internet_speed": 7,
                "percentage_scored": 43,
                "attempted": 1
            },
            {
                "subject": "Subject 34",
                "semester": 2,
                "total_timespent": 2,
                "submission_type": 4,
                "internet_speed": 8,
                "percentage_scored": 35,
                "attempted": 1
            },
            {
                "subject": "Subject 35",
                "semester": 3,
                "total_timespent": 96,
                "submission_type": 2,
                "internet_speed": 10,
                "percentage_scored": 36,
                "attempted": 1
            },
            {
                "subject": "Subject 36",
                "semester": 1,
                "total_timespent": 57,
                "submission_type": 2,
                "internet_speed": 2,
                "percentage_scored": 75,
                "attempted": 1
            },
            {
                "subject": "Subject 37",
                "semester": 3,
                "total_timespent": 92,
                "submission_type": 3,
                "internet_speed": 10,
                "percentage_scored": 99,
                "attempted": 1
            },
            {
                "subject": "Subject 38",
                "semester": 1,
                "total_timespent": 34,
                "submission_type": 2,
                "internet_speed": 3,
                "percentage_scored": 37,
                "attempted": 1
            },
            {
                "subject": "Subject 39",
                "semester": 2,
                "total_timespent": 1,
                "submission_type": 1,
                "internet_speed": 10,
                "percentage_scored": 27,
                "attempted": 1
            },
            {
                "subject": "Subject 40",
                "semester": 1,
                "total_timespent": 52,
                "submission_type": 3,
                "internet_speed": 1,
                "percentage_scored": 18,
                "attempted": 1
            },
            {
                "subject": "Subject 41",
                "semester": 3,
                "total_timespent": 59,
                "submission_type": 3,
                "internet_speed": 8,
                "percentage_scored": 47,
                "attempted": 1
            },
            {
                "subject": "Subject 42",
                "semester": 1,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 43",
                "semester": 3,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 44",
                "semester": 3,
                "total_timespent": 7,
                "submission_type": 1,
                "internet_speed": 2,
                "percentage_scored": 38,
                "attempted": 1
            },
            {
                "subject": "Subject 45",
                "semester": 3,
                "total_timespent": 8,
                "submission_type": 1,
                "internet_speed": 2,
                "percentage_scored": 51,
                "attempted": 1
            },
            {
                "subject": "Subject 46",
                "semester": 3,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 47",
                "semester": 2,
                "total_timespent": 53,
                "submission_type": 2,
                "internet_speed": 2,
                "percentage_scored": 29,
                "attempted": 1
            },
            {
                "subject": "Subject 48",
                "semester": 1,
                "total_timespent": 81,
                "submission_type": 2,
                "internet_speed": 1,
                "percentage_scored": 86,
                "attempted": 1
            },
            {
                "subject": "Subject 49",
                "semester": 1,
                "total_timespent": 66,
                "submission_type": 1,
                "internet_speed": 7,
                "percentage_scored": 34,
                "attempted": 1
            },
            {
                "subject": "Subject 50",
                "semester": 3,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 51",
                "semester": 1,
                "total_timespent": 52,
                "submission_type": 3,
                "internet_speed": 6,
                "percentage_scored": 70,
                "attempted": 1
            },
            {
                "subject": "Subject 52",
                "semester": 1,
                "total_timespent": 90,
                "submission_type": 1,
                "internet_speed": 10,
                "percentage_scored": 23,
                "attempted": 1
            },
            {
                "subject": "Subject 53",
                "semester": 3,
                "total_timespent": 91,
                "submission_type": 1,
                "internet_speed": 2,
                "percentage_scored": 98,
                "attempted": 1
            },
            {
                "subject": "Subject 54",
                "semester": 3,
                "total_timespent": 45,
                "submission_type": 2,
                "internet_speed": 2,
                "percentage_scored": 82,
                "attempted": 1
            },
            {
                "subject": "Subject 55",
                "semester": 1,
                "total_timespent": 47,
                "submission_type": 1,
                "internet_speed": 1,
                "percentage_scored": 48,
                "attempted": 1
            },
            {
                "subject": "Subject 56",
                "semester": 2,
                "total_timespent": 32,
                "submission_type": 1,
                "internet_speed": 1,
                "percentage_scored": 77,
                "attempted": 1
            },
            {
                "subject": "Subject 57",
                "semester": 2,
                "total_timespent": 54,
                "submission_type": 3,
                "internet_speed": 6,
                "percentage_scored": 34,
                "attempted": 1
            },
            {
                "subject": "Subject 58",
                "semester": 3,
                "total_timespent": 13,
                "submission_type": 2,
                "internet_speed": 7,
                "percentage_scored": 33,
                "attempted": 1
            },
            {
                "subject": "Subject 59",
                "semester": 3,
                "total_timespent": 89,
                "submission_type": 4,
                "internet_speed": 3,
                "percentage_scored": 62,
                "attempted": 1
            },
            {
                "subject": "Subject 60",
                "semester": 3,
                "total_timespent": 92,
                "submission_type": 3,
                "internet_speed": 9,
                "percentage_scored": 71,
                "attempted": 1
            },
            {
                "subject": "Subject 61",
                "semester": 3,
                "total_timespent": 2,
                "submission_type": 4,
                "internet_speed": 6,
                "percentage_scored": 2,
                "attempted": 1
            },
            {
                "subject": "Subject 62",
                "semester": 2,
                "total_timespent": 56,
                "submission_type": 3,
                "internet_speed": 5,
                "percentage_scored": 51,
                "attempted": 1
            },
            {
                "subject": "Subject 63",
                "semester": 2,
                "total_timespent": 86,
                "submission_type": 4,
                "internet_speed": 2,
                "percentage_scored": 6,
                "attempted": 1
            },
            {
                "subject": "Subject 64",
                "semester": 3,
                "total_timespent": 2,
                "submission_type": 3,
                "internet_speed": 1,
                "percentage_scored": 35,
                "attempted": 1
            },
            {
                "subject": "Subject 65",
                "semester": 2,
                "total_timespent": 34,
                "submission_type": 2,
                "internet_speed": 1,
                "percentage_scored": 34,
                "attempted": 1
            },
            {
                "subject": "Subject 66",
                "semester": 2,
                "total_timespent": 42,
                "submission_type": 2,
                "internet_speed": 3,
                "percentage_scored": 83,
                "attempted": 1
            },
            {
                "subject": "Subject 67",
                "semester": 3,
                "total_timespent": 0,
                "submission_type": 3,
                "internet_speed": 4,
                "percentage_scored": 73,
                "attempted": 1
            },
            {
                "subject": "Subject 68",
                "semester": 1,
                "total_timespent": 27,
                "submission_type": 2,
                "internet_speed": 2,
                "percentage_scored": 2,
                "attempted": 1
            },
            {
                "subject": "Subject 69",
                "semester": 3,
                "total_timespent": 22,
                "submission_type": 4,
                "internet_speed": 10,
                "percentage_scored": 12,
                "attempted": 1
            },
            {
                "subject": "Subject 70",
                "semester": 3,
                "total_timespent": 52,
                "submission_type": 3,
                "internet_speed": 1,
                "percentage_scored": 70,
                "attempted": 1
            },
            {
                "subject": "Subject 71",
                "semester": 2,
                "total_timespent": 15,
                "submission_type": 4,
                "internet_speed": 3,
                "percentage_scored": 80,
                "attempted": 1
            },
            {
                "subject": "Subject 72",
                "semester": 2,
                "total_timespent": 62,
                "submission_type": 2,
                "internet_speed": 5,
                "percentage_scored": 71,
                "attempted": 1
            },
            {
                "subject": "Subject 73",
                "semester": 3,
                "total_timespent": 79,
                "submission_type": 3,
                "internet_speed": 2,
                "percentage_scored": 6,
                "attempted": 1
            },
            {
                "subject": "Subject 74",
                "semester": 3,
                "total_timespent": 18,
                "submission_type": 1,
                "internet_speed": 8,
                "percentage_scored": 77,
                "attempted": 1
            },
            {
                "subject": "Subject 75",
                "semester": 2,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 76",
                "semester": 3,
                "total_timespent": 78,
                "submission_type": 4,
                "internet_speed": 8,
                "percentage_scored": 64,
                "attempted": 1
            },
            {
                "subject": "Subject 77",
                "semester": 3,
                "total_timespent": 26,
                "submission_type": 1,
                "internet_speed": 2,
                "percentage_scored": 43,
                "attempted": 1
            },
            {
                "subject": "Subject 78",
                "semester": 3,
                "total_timespent": 80,
                "submission_type": 1,
                "internet_speed": 7,
                "percentage_scored": 40,
                "attempted": 1
            },
            {
                "subject": "Subject 79",
                "semester": 1,
                "total_timespent": 4,
                "submission_type": 4,
                "internet_speed": 5,
                "percentage_scored": 28,
                "attempted": 1
            },
            {
                "subject": "Subject 80",
                "semester": 2,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 81",
                "semester": 3,
                "total_timespent": 19,
                "submission_type": 2,
                "internet_speed": 7,
                "percentage_scored": 13,
                "attempted": 1
            },
            {
                "subject": "Subject 82",
                "semester": 1,
                "total_timespent": 78,
                "submission_type": 3,
                "internet_speed": 7,
                "percentage_scored": 65,
                "attempted": 1
            },
            {
                "subject": "Subject 83",
                "semester": 3,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 84",
                "semester": 2,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 85",
                "semester": 3,
                "total_timespent": 16,
                "submission_type": 1,
                "internet_speed": 3,
                "percentage_scored": 16,
                "attempted": 1
            },
            {
                "subject": "Subject 86",
                "semester": 2,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 87",
                "semester": 3,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 88",
                "semester": 1,
                "total_timespent": 11,
                "submission_type": 3,
                "internet_speed": 10,
                "percentage_scored": 4,
                "attempted": 1
            },
            {
                "subject": "Subject 89",
                "semester": 1,
                "total_timespent": 92,
                "submission_type": 2,
                "internet_speed": 6,
                "percentage_scored": 14,
                "attempted": 1
            },
            {
                "subject": "Subject 90",
                "semester": 1,
                "total_timespent": null,
                "submission_type": null,
                "internet_speed": null,
                "percentage_scored": null,
                "attempted": 0
            },
            {
                "subject": "Subject 91",
                "semester": 1,
                "total_timespent": 60,
                "submission_type": 2,
                "internet_speed": 9,
                "percentage_scored": 26,
                "attempted": 1
            },
            {
                "subject": "Subject 92",
                "semester": 2,
                "total_timespent": 66,
                "submission_type": 4,
                "internet_speed": 9,
                "percentage_scored": 70,
                "attempted": 1
            },
            {
                "subject": "Subject 93",
                "semester": 2,
                "total_timespent": 16,
                "submission_type": 2,
                "internet_speed": 5,
                "percentage_scored": 2,
                "attempted": 1
            },
            {
                "subject": "Subject 94",
                "semester": 1,
                "total_timespent": 50,
                "submission_type": 3,
                "internet_speed": 3,
                "percentage_scored": 82,
                "attempted": 1
            },
            {
                "subject": "Subject 95",
                "semester": 2,
                "total_timespent": 57,
                "submission_type": 3,
                "internet_speed": 2,
                "percentage_scored": 47,
                "attempted": 1
            },
            {
                "subject": "Subject 96",
                "semester": 1,
                "total_timespent": 93,
                "submission_type": 1,
                "internet_speed": 2,
                "percentage_scored": 3,
                "attempted": 1
            },
            {
                "subject": "Subject 97",
                "semester": 2,
                "total_timespent": 46,
                "submission_type": 4,
                "internet_speed": 10,
                "percentage_scored": 77,
                "attempted": 1
            },
            {
                "subject": "Subject 98",
                "semester": 2,
                "total_timespent": 44,
                "submission_type": 3,
                "internet_speed": 10,
                "percentage_scored": 50,
                "attempted": 1
            },
            {
                "subject": "Subject 99",
                "semester": 3,
                "total_timespent": 32,
                "submission_type": 1,
                "internet_speed": 8,
                "percentage_scored": 42,
                "attempted": 1
            },
            {
                "subject": "Subject 100",
                "semester": 3,
                "total_timespent": 24,
                "submission_type": 3,
                "internet_speed": 1,
                "percentage_scored": 27,
                "attempted": 1
            }
        ]
    }

    const rankedTableData = tableData.assessments.map((row) => ({
        ...row,
        rank: 1 + tableData.assessments.filter((r) => r.percentage_scored > row.percentage_scored).length,
    }))
    console.log(rankedTableData)

    const headerArr = [
        { label: 'subject', isSortable: true, isSelectable: false },
        { label: 'semester', isSortable: false, isSelectable: false },
        { label: 'total_timespent', isSortable: false, isSelectable: true },
        { label: 'submission_type', isSortable: true, isSelectable: false },
        { label: 'internet_speed', isSortable: true, isSelectable: false },
        { label: 'Ipercentage_scored', isSortable: false, isSelectable: false },
        { label: 'Submitted At', isSortable: true, isSelectable: false },
        { label: 'attempted', isSortable: true, isSelectable: false },
    ];

    const submissionTypesToShowinStudentTable = [1, 2, 3];


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
                    <CalendarComponent />
                    {/* <CustomTable /> */}
                    {/* <PdfViewerComponent /> */}
                    <Box width="200px" height={"200px"}>
                        <MuiCustomTableWithSortadnSelect
                            HeaderArr={headerArr}
                            tableData={tableData.assessments}
                            submissionTypesToShowinStudentTable
                        />
                    </Box>
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