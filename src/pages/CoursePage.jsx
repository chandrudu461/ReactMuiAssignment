import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Chip, Box, Typography, Stack, Button, Grid, List, ListItem } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import UnitsComponent from "../features/Courses/components/units/UnitsComponent.jsx";
import { useTheme } from '@mui/material'
import { fetchCourseData } from "../store/actions/course.actions.jsx";
import CourseDescription from "../features/Courses/components/course/CourseDescription.jsx";
import ContinueReading from "../features/Courses/components/course/ContinueReading.jsx";

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
        <Box id="course-page" sx={{
            position: 'absolute',
            top: '80px',
            left: '5rem',
            backgroundColor: "#ffffff",
            width: '93vw',
            height: '1000px'
        }}>
            {Object.keys(courseData).length > 0 && (
                <>
                    <CourseDescription data={data} />
                    <ContinueReading data={data} />
                    <UnitsComponent data={data} />
                </>
            )
            }
        </Box >
    );
}

export default CoursePage;