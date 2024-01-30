// import { Typography } from '@mui/material';
import Login from '../components/common/Login.jsx'
import LoginIcon from '../svg/LoginIcon.jsx'
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

    const childStyle = {
        flex: '1',
    };

    const loginStyle = {
        flex: '1',
        margin: 'auto'
    }

    return (
        // <Login />
        <div>
            <div style={containerStyle}>
                <div style={childStyle}>
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
