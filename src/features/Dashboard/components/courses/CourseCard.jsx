import React from 'react'
import { Box, Typography, Button, Hidden } from '@mui/material'
import ImageComponent from '../../../../components/common/ImageComponent';
const CourseCard = ({ id, name, image, tag }) => {
    const boxStyles = {
        borderRadius: '10px',
        border: '1px solid #F4F6F8',
        background: '#FFF',
        boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
        display: 'inline-flex',
        paddingBottom: '14px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '14px',
        maxWidth: '244px',
        maxHeight: '281px',
        color: '#fff'
        // Add more styles as needed
    };
    return (
        <>
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
                    backgroundColor: '#E7EEFE',
                    marginLeft: '14px',
                    height: '12px'
                }}>
                    <Typography
                        variant='courseChip'
                        sx={{
                            color: '#0B58F5'
                        }}>{tag}</Typography>
                </Box>
                <Box sx={{
                    height: '40px',
                    padding: '0 14px 0 14px'
                }}>
                    <Typography
                        variant='cardText'
                        sx={{
                            color: '#161C24',
                        }}>{name}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default CourseCard;