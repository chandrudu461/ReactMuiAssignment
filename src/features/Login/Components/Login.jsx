import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import PasswordIcon from '../../../assets/svg/PasswordIcon.jsx';
import { Box, FormControlLabel } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { loginActions } from '../../../store/index.js'
import Button from '@mui/material/Button';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = useSelector((state) => state.login);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if (storedUsername && storedPassword) {
            setUsername(storedUsername);
            setPassword(storedPassword);
            setRememberMe(true); // Set rememberMe to true if credentials are found
        }
    }, []);

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberMe = (event) => {
        setRememberMe(event.target.checked);
    };

    const handleLogin = (event) => {
        event.preventDefault();

        // rememberMe functionality
        if (username === "student@edwisely.com" && password === "edwisely@2024") {
            dispatch(loginActions.login());
            if (rememberMe) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }
            localStorage.setItem("login", true);
            navigate('/dashboard');
        }
    };

    // const handleLogin = (event) => {
    //     // event.preventDefault(); 

    //     // const url = `https://stagingstudentpython.edwisely.com/reactProject/loginUser?username=${username}&password=${password}`;

    //     // fetch(url, {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'Content-Type': 'application/json',
    //     //     },
    //     // })
    //     //     .then(response => {
    //     //         if (response.ok) {
    //     //             dispatch(loginActions.login());
    //     //             console.log(login);
    //     //             navigate('/dashboard');
    //     //         } else {
    //     //             console.error('Login failed');
    //     //         }
    //     //     })
    //     //     .catch(error => {
    //     //         console.error('Error:', error);
    //     //     });

    //     if (username === "student@edwisely.com" && password === "edwisely@2024") {
    //         dispatch(loginActions.login());
    //         console.log(login);
    //         navigate('/dashboard');
    //     }
    // };

    const buttonStyles = {
        width: '381px',
        padding: '10px',
        gap: '10px',
        borderRadius: "10px",
        background: '#0B58F5',
    };

    return (
        <Stack
            alignItems={'center'}
            justifyContent={'center'}
            alignContent={'center'}
            marginX={'auto'}>
            <Stack spacing={2}>
                <Typography variant='loginHeading'>Login</Typography>
                <Typography variant='body8'>Enter your account details</Typography>

                <TextField id="standard-basic" label="Username" variant="standard" style={{ width: 381, border: '0' }} value={username} onChange={handleUsername} />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    type={showPassword ? 'text' : 'password'}
                    style={{ width: 381, border: '0' }}
                    value={password}
                    onChange={handlePassword}
                    InputProps={{
                        endAdornment: <Box sx={{ '&:hover': { cursor: 'pointer' } }} onClick={togglePasswordVisibility}><PasswordIcon /></Box>,
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={rememberMe}
                            onChange={handleRememberMe}
                            style={{ color: '#0B58F5' }}
                        />
                    }
                    label="Remember me"
                />
                <Button type="submit" variant="contained" style={buttonStyles} onClick={handleLogin}>Login</Button>
            </Stack>
        </Stack>
    );
};

export default Login;
