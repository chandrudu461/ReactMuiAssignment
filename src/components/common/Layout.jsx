import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Box sx={{ width: '94vw', position: 'absolute', left: '6vw' }}>
                <Header />
            </Box>
            <Box sx={{
                // margin: '80px 0 0 6vw'
            }}>
                <Outlet />
            </Box>
            {/* <Header /> */}
            {children}
        </div>
    );
};

export default Layout;