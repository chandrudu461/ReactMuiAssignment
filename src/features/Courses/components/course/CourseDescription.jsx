import React from 'react'
import { Box, Typography, Slider, Grid, List, ListItem } from '@mui/material'
import { useNavigate } from 'react-router';
import BackButtonIcon from '../../../../assets/svg/BackButtonIcon';
import { useTheme } from '@mui/material';

const CourseDescription = ({ data }) => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleBack = () => {
        navigate("/dashboard");
    };

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '35px',
                marginLeft: '33.5px',
                alignItems: 'center',
            }}>
                <Box
                    sx={{
                        strokeWidth: '3px',
                        stroke: '#252525',
                        cursor: 'pointer'
                    }}
                    onClick={handleBack}>
                    <BackButtonIcon />
                </Box>
                <Typography
                    variant="h2"
                    sx={{
                        marginLeft: '29.5px',
                        marginRight: '20px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {data.name}
                </Typography>
                <Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '4px 6px 4px 6px',
                        backgroundColor: '#E7EEFE',
                        marginLeft: '14px',
                        height: '20px',
                        width: '63px'
                    }}>
                        <Typography
                            variant='coursePageChip'
                            sx={{
                                color: '#0B58F5'
                            }}>DESIGN</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                width: '20.5rem',
                height: '21px',
                marginTop: '18px',
                marginLeft: '5.313rem',
                alignItems: 'center',
                display: 'flex',
            }}>
                <Slider
                    size="medium"
                    defaultValue={data.percentage}
                    valueLabelDisplay="auto"
                    max={100}
                    min={0}
                    sx={{
                        width: 255,
                        "& .MuiSlider-thumb": {
                            width: 0,
                            height: 0,
                        },
                    }}
                />
                <Typography
                    variant='tableStudentRowCell'
                    sx={{
                        marginLeft: '12px',
                        width: '100px;'
                    }}
                    style={{ color: theme.palette.primary[700] }}>
                    Avg. {data.percentage}%
                </Typography>
            </Box>
            <Grid item md={10} sx={{ marginLeft: "5.31rem", marginTop: '1.43rem', marginRight: '6.625rem' }}>
                <Typography
                    variant='body8'
                >
                    What you will learn
                </Typography>
                <List sx={{ listStyleType: "disc", paddingLeft: "1rem" }}>
                    {data.description.split("\n").map((paragraph, index) => (
                        <ListItem sx={{ display: "list-item" }} key={index} disablePadding>
                            <Typography variant="tableStudentRowCell">
                                {paragraph}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </>
    )
}

export default CourseDescription