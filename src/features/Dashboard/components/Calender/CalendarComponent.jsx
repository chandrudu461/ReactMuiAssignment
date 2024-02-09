import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { Typography, Box, Skeleton, useTheme } from '@mui/material'

const CalendarComponent = ({ loading }) => {
    const theme = useTheme();
    return (
        <>
            {
                !loading ?
                    <Box width={'100%'}>
                        < Typography
                            variant='h5'
                        >
                            Calendar
                        </Typography >
                        <Box
                            sx={{
                                borderRadius: '10px',
                                border: '1px solid',
                                borderColor: theme.palette.grey[100],
                                background: theme.palette.primary[0],
                                boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                            }}
                        >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar sx={{ width: '100%' }} />
                            </LocalizationProvider>
                        </Box>
                    </Box > : <Skeleton variant='wave' width={250} height={200} />
            }
        </>
    )
}
export default CalendarComponent