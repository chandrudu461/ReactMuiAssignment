import React from 'react';
import { Stack, Box } from '@mui/material';
import EdwiselyIcon from '../../assets/svg/EdwiselyIcon';
import DashboardIcon from '../../assets/svg/DashboardIcon';
import BookIcon from '../../assets/svg/BookIcon';
import LogoutIcon from '../../assets/svg/LogoutIcon'
import { useNavigate } from 'react-router';
import { loginActions } from '../../store/index.js'
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(loginActions.logout())
        navigate('/');
    }
    const handleDashboardIconClick = () => {
        navigate('/dashboard');
    }
    return (
        <Stack spacing={'24px'} width={'6vw'} height={'100vh'} position='fixed' direction='column'
            style={{
                background: '#F4F6F8',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderRadius: '40px 0 0 40px'
            }}>
            <Stack alignItems={'center'}>
                <EdwiselyIcon />
                <Box onClick={handleDashboardIconClick} sx={{
                    '&:hover': {
                        cursor: 'pointer',
                    },
                }}>
                    <DashboardIcon />
                </Box>
                <div style={{ marginTop: 40 }}>
                    <BookIcon />
                </div>
            </Stack >
            <Stack justifyContent='flex-end' alignItems='center' sx={{
                height: '100%',
                // border: '2px solid red'
            }}>
                <div onClick={handleLogout} style={{ marginTop: 'auto', marginBottom: 12 }}>
                    <LogoutIcon />
                </div>
            </Stack>
        </Stack>
    )
}

export default Navbar;