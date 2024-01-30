import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import PasswordIcon from '../../svg/PasswordIcon';
import { FormControlLabel } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { loginActions } from '../../store/index.js'
import Button from '@mui/material/Button';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = useSelector((state) => state.login);
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleLogin = () => {
        if (username === cred.username && password === cred.password) {
            dispatch(loginActions.login())
            console.log(login);
            navigate('/dashboard');
        }
    }

    const cred = {
        username: 'student@edwisely.com',
        password: 'edwisely@2024'
    }
    const buttonStyles = {
        width: '381px',
        padding: '10px',
        gap: '10px',
        borderRadius: "10px",
        background: '#0B58F5',
    };
    return (
        <>
            <Stack spacing={2}>
                <Typography
                    style={{
                        fontSize: 48,
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        color: '#161C24',
                    }}
                >
                    Login
                </Typography>
                <Typography
                    style={{
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        color: '#161C24',
                    }}
                >
                    Enter your account details
                </Typography>

                <TextField id="standard-basic" label="Username" variant="standard" style={{ width: 381, border: '0px solid red' }}
                    onChange={handleUsername} />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type="password"
                    style={{
                        width: 381,
                        border: '0px solid red'
                    }}
                    onChange={handlePassword}
                    InputProps={{
                        endAdornment: <PasswordIcon />,
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            style={{
                                width: '14.823px',
                                height: '14.823px',
                                flexShrink: 0,
                                borderRadius: '3px',
                                color: '#0B58F5',
                                marginRight: 9.18,
                                // border: '1px solid #0B58F5',
                            }}
                        />
                    }
                    label="Remember me"
                />
                {/* <FormControlLabel control={<Checkbox style={{ borderRadius: 3, border: "1px solid #0B58F5", width: 14.823, height: 14.823 }} />} label="Remember Me" /> */}
                <Button variant="contained" style={buttonStyles} onClick={handleLogin}>
                    Login
                </Button>
            </Stack>
        </>
    );
};

export default Login;
