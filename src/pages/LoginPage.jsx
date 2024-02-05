// import { Typography } from '@mui/material';
import Login from '../components/common/Login.jsx'
import LoginIcon from '../assets/svg/LoginIcon.jsx'
// import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});

function LoginPage() {
    const containerStyle = {
        display: 'flex',
        width: '100%',
    };

    const loginStyle = {
        margin: 'auto'
    }

    return (
        // <Login />
        <div>
            <div style={containerStyle}>
                <div>
                    <LoginIcon />
                </div>
                <div style={loginStyle}>
                    <Login />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
