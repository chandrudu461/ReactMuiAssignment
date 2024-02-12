import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Chip, Box, Typography, Stack, Button, Grid, List, ListItem } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import UnitsComponent from "../features/Courses/components/units/UnitsComponent.jsx";
import { useTheme } from '@mui/material'
import { fetchCourseData } from "../store/actions/course.actions.jsx";
import CourseDescription from "../features/Courses/components/course/CourseDescription.jsx";
import ContinueReading from "../features/Courses/components/course/ContinueReading.jsx";
import withSidebarAndHeader from '../components/HOC/withSideBarAndHeader'
import { Skeleton } from "@mui/material";

function CoursePage() {
    const navigate = useNavigate();
    const { courseId } = useParams();
    const id = parseInt(courseId);
    const isLoggedIn = localStorage.getItem("login");
    // console.log(isLoggedIn); 
    const { courseData, loading, error } = useSelector(
        (state) => state.course
    )

    const theme = useTheme();
    const dispatch = useDispatch();
    const data = courseData.data;

    useEffect(() => {
        dispatch(fetchCourseData(id))
    }, [dispatch])

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    if (!isLoggedIn) {
        return (
            <Stack padding='150px' direction={'row'} spacing={3}>
                <Typography>Login before Trying!!!</Typography>
                <Link to={'/'} onClick={scrollToTop} >
                    <Button variant='contained'>Login</Button>
                </Link>
            </Stack >
        )
    }
    return (
        <Box sx={{
            position: 'absolute',
            left: '5rem',
            backgroundColor: theme.palette.primary[0],
            width: '93vw',
            height: '1200px',
        }}>
            {Object.keys(courseData).length > 0 ? (
                <>
                    <CourseDescription loading={loading} data={data} />
                    <ContinueReading loading={loading} data={data} />
                    <UnitsComponent loading={loading} data={data} />
                </>
            ) :

                <>
                    <Stack margin={'50px'} spacing={4}>
                        <Skeleton variant="rectangular" width={1000} height={50} />
                        <Skeleton variant="rectangular" width={1000} height={150} />
                    </Stack>

                    <Box marginLeft={'50px'}>
                        <Skeleton variant="rectangular" width={200} height={30} />
                    </Box>

                    <Stack marginTop={'20px'} marginLeft={'50px'} spacing={4} direction={'row'}>
                        <Skeleton variant="rectangular" width={300} height={80} />
                        <Skeleton variant="rectangular" width={300} height={80} />
                        <Skeleton variant="rectangular" width={300} height={80} />
                    </Stack>
                    <Box marginLeft={'50px'} marginTop={'50px'}>
                        <Skeleton variant="rectangular" width={800} height={300} />
                    </Box>
                </>
            }
        </Box >
    );
}

export default withSidebarAndHeader(CoursePage);