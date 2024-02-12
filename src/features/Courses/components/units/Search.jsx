import React, { useState } from 'react';
import { InputBase, useTheme } from '@mui/material';
import SearchStatusIcon from '../../../../assets/svg/SearchStatusIcon';

const Search = ({ value, setValue, handleSearchChange }) => {
    const handleSearchInputChange = (event) => {
        handleSearchChange(event.target.value);
        setValue(event.target.value);
    }
    const theme = useTheme()
    return (
        <InputBase
            placeholder="Search topics"
            startAdornment={<SearchStatusIcon />}
            value={value}
            onChange={handleSearchInputChange}
            sx={{
                borderRadius: '6.64px',
                border: '1px solid',
                borderColor: theme.palette.grey[100],
                background: theme.palette.grey[100],
                display: 'flex',
                height: '35px',
                width: '144px',
                padding: '7.589px 9.486px',
                alignItems: 'center',
                gap: '11.383px',
                flexShrink: 0,
                '&:hover': {
                    border: '1px solid',
                    borderColor: theme.palette.grey[400]
                },
            }}
        />
    )
}

export default Search
