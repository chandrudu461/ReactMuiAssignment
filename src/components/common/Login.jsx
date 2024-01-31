import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import PasswordIcon from '../../svg/PasswordIcon';
import { Box, FormControlLabel } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { loginActions } from '../../store/index.js'
import Button from '@mui/material/Button';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = useSelector((state) => state.login);

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (event) => {
        // event.preventDefault(); 

        // const url = `https://stagingstudentpython.edwisely.com/reactProject/loginUser?username=${username}&password=${password}`;

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             dispatch(loginActions.login());
        //             console.log(login);
        //             navigate('/dashboard');
        //         } else {
        //             console.error('Login failed');
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });

        if (username === "student@edwisely.com" && password === "edwisely@2024") {
            dispatch(loginActions.login());
            console.log(login);
            navigate('/dashboard');
        }
    };

    const buttonStyles = {
        width: '381px',
        padding: '10px',
        gap: '10px',
        borderRadius: "10px",
        background: '#0B58F5',
    };

    return (
        <form onSubmit={handleLogin}>
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
                    type={showPassword ? 'text' : 'password'}
                    style={{
                        width: 381,
                        border: '0px solid red'
                    }}
                    onChange={handlePassword}
                    InputProps={{
                        endAdornment: <Box sx={{
                            '&:hover': {
                                cursor: 'pointer',
                            }

                        }}
                            onClick={togglePasswordVisibility} > <PasswordIcon /></Box>,
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
                            }}
                        />
                    }
                    label="Remember me"
                />
                <Button type="submit" variant="contained" style={buttonStyles}>
                    Login
                </Button>
            </Stack>
        </form>
    );
};

export default Login;
