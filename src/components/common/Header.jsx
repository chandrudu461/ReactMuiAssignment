import React, { useState, useEffect } from 'react';
import { Typography, Box, Popover, Button, Stack } from '@mui/material';
import UserProfileSvg from '../../assets/svg/UserProfileSvg.jsx';
import LogoutIcon from '../../assets/svg/LogoutIcon.jsx';
import { useNavigate } from 'react-router';
import { loginActions } from '../../store/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../store/actions/dashboard.actions'

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const [profilePicture, setProfilePicture] = useState(null);
    const { dashBoardData, loading, error } = useSelector(
        (state) => state.dashboard
    )
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        dispatch(loginActions.logout())
        localStorage.removeItem("login");
        navigate('/');
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
        dispatch(fetchDashboardData())
    }, [dispatch])

    return (
        <>
            <Box style={{
                display: 'flex',
                marginLeft: '80px',
                alignItems: 'center',
                height: '80px',
                background: '#ffffff',
                width: '94%',
                borderBottom: '1px solid #DFE3E8',
            }}>
                <Typography
                    variant="headerText"
                    style={{
                        marginLeft: '20px'
                    }}
                >Good morning, Maharram 👋</Typography>

                <Box position="absolute"
                    right='6vw'
                    style={{
                        borderRadius: '24px'
                    }}>
                    <Box onClick={handleClick} sx={{
                        cursor: 'pointer',
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }} >
                        <UserProfileSvg link={dashBoardData.profile_picture} />
                    </Box>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <Stack direction={"column"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                            <UserProfileSvg link={dashBoardData.profile_picture} />
                            <Box><Typography>Maharrm Hasanli</Typography></Box>
                            <Box><Typography>maga.hesenli@gmail.com</Typography></Box>
                            <Box><Button startIcon={<LogoutIcon />} onClick={handleLogout}>Logout</Button></Box>
                        </Stack>
                    </Popover>
                </Box >
                <hr />
            </Box >
        </>
    )
}

export default Header