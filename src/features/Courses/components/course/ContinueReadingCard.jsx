import { Box, Skeleton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import RightButtonIcon from '../../../../assets/svg/RightButtonIcon'
import DocumentIcon from '../../../../assets/svg/DocumentIcon'
import { Link } from 'react-router-dom'

const ContinueReadingCard = ({ name, url, icon, loading }) => {
    const matches = useMediaQuery('(min-width:900px) and (max-width:1000px)');
    const theme = useTheme()
    const scrollToTop = () => {
        window.scrollTo(0, 0);
        localStorage.setItem("pdfFileName", name);
    }
    return (
        <Link to={`/pdfview/${encodeURIComponent(url)}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
            {loading ?
                <Skeleton variant='rectangular' width={100} height={300} />
                :
                <Stack direction="row" justifyContent={'space-between'} sx={{
                    width: matches ? '15rem' : '17.183rem',
                    height: '80px',
                    padding: '10px',
                    borderRadius: '8px',
                    boxShadow: '0px 0px 15px 0px rgba(16, 24, 40, 0.04)',
                    cursor: 'pointer',
                }}>
                    <Box sx={{
                        width: '15.5rem',
                        height: '60px',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '15px',
                        alignItems: 'center'
                    }} >
                        <Box sx={{
                            width: '3.75rem',
                            height: '60px',
                            padding: '15px',
                            backgroundColor: theme.palette.grey[200],
                            borderRadius: '5px',
                        }}> {icon} </Box>
                        <Box sx={{
                            color: theme.palette.grey[900],
                            paddingTop: '10px',
                        }}>
                            <Typography variant='tableStudentRowCell' >
                                {name}
                            </Typography>
                        </Box>
                        <Box><RightButtonIcon /></Box>
                    </Box>
                </Stack>
            }
        </Link>
    )
}

export default ContinueReadingCard