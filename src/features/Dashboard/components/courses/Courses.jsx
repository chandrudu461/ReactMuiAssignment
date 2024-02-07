import React from 'react';
import { Stack, Typography } from '@mui/material'
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const Courses = ({ data }) => {
    return (
        <>
            <Stack sx={{
                width: '100%',
                height: '324px',
                padding: '2px',
                marginTop: '50px'
            }}>
                <Typography
                    variant='h5'
                    style={{
                        color: '#2E3A59',
                        // fontFamily: 'Poppins',
                        // fontSize: '20px',
                        // fontStyle: 'normal',
                        // fontWeight: 500,
                        // lineHeight: '28px',
                        // marginBottom: '15px'

                    }}>
                    Your Courses
                </Typography>
                <Stack spacing={'22px'} direction={'row'}>
                    {data && data.length > 0 && data.map((course, index) => (
                        <Link to={`/course/${index + 1}`} >
                            <CourseCard
                                key={course.id}
                                id={course.id}
                                name={course.name}
                                tag={course.tag}
                                image={course.image} />
                        </Link>
                    ))}
                </Stack>
            </Stack>
        </>
    )
}

export default Courses