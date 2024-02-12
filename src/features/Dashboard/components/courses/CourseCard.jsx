import React from 'react'
import { Box, Typography, Button, Hidden, Skeleton, useTheme } from '@mui/material'

const CourseCard = ({ id, name, image, tag, loading }) => {
    const theme = useTheme();
    const boxStyles = {
        borderRadius: '10px',
        border: '1px solid',
        borderColor: theme.palette.grey[100],
        background: theme.palette.primary[0],
        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
        display: 'inline-flex',
        paddingBottom: '14px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '14px',
        maxWidth: '244px',
        maxHeight: '281px',
        color: theme.palette.primary[0]
    };

    return (
        <>
            {loading ? (
                <Skeleton variant="rectangular" width={244} height={281} />
            ) : (
                <Box spacing={2} style={boxStyles}>
                    <Box sx={{
                        // height: '183px',
                    }}>
                        <img src={image} style={{
                            aspectRatio: '244/183',
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px'
                        }} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '4px 6px 4px 6px',
                        backgroundColor: theme.palette.primary[100],
                        marginLeft: '14px',
                        height: '12px'
                    }}>
                        <Typography
                            variant='courseChip'
                            sx={{
                                color: theme.palette.primary[700],
                            }}>{tag}</Typography>
                    </Box>
                    <Box sx={{
                        height: '40px',
                        padding: '0 14px 0 14px'
                    }}>
                        <Typography
                            variant='cardText'
                            sx={{
                                color: theme.palette.grey[900],
                            }}>{name}</Typography>
                    </Box>
                </Box>
            )}
        </>
    )
}

export default CourseCard;
