import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)(({ theme, backgroundColor }) => ({
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused': {
            borderColor: theme.palette.primary.main, // Border color on focus
        },
        '&:hover': {
            borderColor: theme.palette.primary.light, // Border color on hover
        },
        backgroundColor: backgroundColor,
        margin: '0.8px'
    },
}));

const Search = ({ backgroundColor, startIcon, hintText, ...rest }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <CustomTextField
            className='MuiInputAdornment-root'
            {...rest}
            variant="outlined"
            InputProps={{
                startAdornment: startIcon,
                placeholder: hintText,
                value: value,
                onChange: handleChange,
            }}
            backgroundColor={backgroundColor}
        />
    );
};

export default Search;
