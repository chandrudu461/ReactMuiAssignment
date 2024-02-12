// import { Typography } from '@mui/material';
import Login from '../features/Login/Components/Login.jsx'
import LoginIcon from '../assets/svg/LoginIcon.jsx'
import { Stack } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';


const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});


function LoginPage() {
    const isLoggedIn = localStorage.getItem('login');
    console.log('login', isLoggedIn)

    if (isLoggedIn) {
        console.log("navigate to dashboard")
        return <Navigate to="/dashboard" />;
    }

    return (
        // <Login />
        <Stack
            direction={'row'}
            sx={{
                width: '100%',
                maxWidth: '1500px',
            }}
        >
            <LoginIcon />
            <Login />
        </Stack>
    );
}

export default LoginPage;
