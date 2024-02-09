import React from 'react'
import { Grid, Typography, List, ListItem, Box, Stack } from '@mui/material'
import DocumentIcon from '../../../../assets/svg/DocumentIcon'
import PresentationIcon from '../../../../components/common/PresentationIcon'
import ContinueReadingCard from './ContinueReadingCard'

const ContinueReading = ({ data }) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
        console.log('clickde')
    }

    return (
        <>
            <Box sx={{
                marginLeft: '56px',
                marginTop: '47px'
            }}>
                <Typography
                    variant='continueReading'
                    sx={{
                        color: '#000',
                        marginBottom: '10px'
                    }}>Continue reading</Typography>
                <Stack
                    display={'flex'}
                    flexDirection={'row'}
                    // justifyContent={'space-around'}
                    sx={{
                        // width: '30rem',
                        // height: '80px',
                        gap: '1.375rem',
                        marginTop: '12px',
                        // border: '1px solid red'
                    }}>
                    {data.continue_reading.map((pdf, index) => (
                        <ContinueReadingCard
                            key={pdf.id}
                            name={pdf.name}
                            url={pdf.url}
                            icon={(index === 0) ? <DocumentIcon /> : <PresentationIcon />}
                        />
                    ))}
                </Stack>
            </Box>
        </>
    )
}

export default ContinueReading