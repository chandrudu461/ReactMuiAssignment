import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { Typography, Box } from '@mui/material'

const CalendarComponent = () => {
    return (
        <Box width={'100%'}>
            <Typography
                variant='h5'
                sx={{
                    color: 'var(--Basic-700, #2E3A59)',
                    // fontSize: '20px',
                    // fontStyle: 'normal',
                    // fontWeight: 500,
                    // lineHeight: '28px',
                    // marginTop: '5 px',
                }}
            >
                Calendar
            </Typography>
            <Box
                sx={{
                    borderRadius: '10px',
                    border: '1px solid #F4F6F8',
                    background: '#FFF',
                    boxShadow: '10px 10px 32px 0px rgba(22, 22, 22, 0.04)',
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar sx={{ width: '100%' }} />
                </LocalizationProvider>
            </Box>
        </Box>
    )
}
export default CalendarComponent