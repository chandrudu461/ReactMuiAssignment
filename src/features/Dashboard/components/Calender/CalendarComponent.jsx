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
                    <Box width={'319px'}>
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
                                <DateCalendar
                                    views={['day']}
                                    sx={{
                                        '&.MuiDateCalendar-root': {
                                            width: '100%',
                                            maxHeight: '234px',
                                            marginLeft: 0,
                                        },
                                        '& .MuiPickersCalendarHeader-root': {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            margin: '0px',
                                            padding: '0px',
                                            paddingLeft: '20px',
                                            paddingRight: '10px',
                                            width: '100%',
                                            marginTop: '2px',
                                        },
                                        '& .MuiPickersCalendarHeader-labelContainer': {
                                            margin: '0px',
                                            padding: '0px',
                                            gap: '20px',
                                        },
                                        '& .MuiPickersCalendarHeader-label': {
                                            margin: '0px',
                                            padding: '0px',
                                            color: '#0B58F5',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal',
                                            textAlign: 'center',
                                        },
                                        '& .MuiPickersArrowSwitcher-button': {
                                            margin: '0px',
                                            padding: '0px',
                                        },
                                        '& .MuiPickersArrowSwitcher-spacer': {
                                            width: '0px',
                                            height: '0px',
                                        },
                                        '& .MuiDayCalendar-root': {
                                            width: '100%',
                                            maxHeight: '234px',
                                            marginLeft: 0,
                                        },
                                        '& .MuiDayCalendar-header': {
                                            paddingLeft: '20px',
                                            paddingRight: '20px',
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                        },
                                        '& .MuiDayCalendar-weekDayLabel': {
                                            margin: '0px',
                                            padding: '0px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal',
                                        },
                                        '& .MuiDayCalendar-weekContainer': {
                                            margin: '0px',
                                            padding: '0px',
                                            paddingLeft: '20px',
                                            paddingRight: '20px',
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                        },
                                        '& .MuiDayCalendar-slideTransition': {
                                            width: '100%',
                                            maxHeight: '234px!important',
                                            margin: '0px',
                                            padding: '0px',
                                        },
                                        '& .MuiPickersDay-root': {
                                            margin: '0px',
                                            padding: '0px',
                                            width: '36px',
                                            height: '28px',
                                            borderRadius: '3.57px',
                                            color: '#212B36',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            lineHeight: 'normal',
                                        },
                                        '& .MuiPickersDay-daySelected': {
                                            color: theme.palette.primary[0],
                                            background: theme.palette.primary.main,
                                            borderRadius: '3.57px',
                                        }
                                    }}
                                />
                            </LocalizationProvider>
                        </Box>
                    </Box > : <Skeleton variant='wave' width={250} height={200} />
            }
        </>
    )
}
export default CalendarComponent