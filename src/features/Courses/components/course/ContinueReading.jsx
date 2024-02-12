import React from 'react'
import { Grid, Typography, List, ListItem, Box, Stack, useTheme } from '@mui/material'
import DocumentIcon from '../../../../assets/svg/DocumentIcon'
import PresentationIcon from '../../../../components/common/PresentationIcon'
import ContinueReadingCard from './ContinueReadingCard'

const ContinueReading = ({ data, loading }) => {
    const theme = useTheme()

    return (
        <>
            <Box sx={{
                marginLeft: '56px',
                marginTop: '47px'
            }}>
                <Typography
                    variant='continueReading'
                    sx={{
                        color: theme.palette.primary[0],
                        marginBottom: '10px'
                    }}>Continue reading</Typography>
                <Stack
                    display={'flex'}
                    flexDirection={'row'}
                    // justifyContent={'space-around'}
                    sx={{
                        gap: '1.375rem',
                        marginTop: '12px',
                    }}>
                    {data.continue_reading.map((pdf, index) => (
                        <ContinueReadingCard
                            key={pdf.id}
                            name={pdf.name}
                            url={pdf.url}
                            loading={loading}
                            icon={(index === 0) ? <DocumentIcon /> : <PresentationIcon />}
                        />
                    ))}
                </Stack>
            </Box>
        </>
    )
}

export default ContinueReading