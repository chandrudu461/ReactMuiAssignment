import React, { useState } from 'react';
import { InputBase } from '@mui/material';
import SearchStatusIcon from '../../../../assets/svg/SearchStatusIcon';

const Search = ({ value, setValue, handleSearchChange }) => {
    const handleSearchInputChange = (event) => {
        handleSearchChange(event.target.value);
        setValue(event.target.value);
    }
    return (
        <InputBase
            placeholder="Search topics"
            startAdornment={<SearchStatusIcon />}
            value={value}
            onChange={handleSearchInputChange}
            sx={{
                borderRadius: '6.64px',
                border: '1px solid #F4F6F8',
                background: '#F4F6F8',
                display: 'flex',
                height: '35px',
                width: '144px',
                padding: '7.589px 9.486px',
                alignItems: 'center',
                gap: '11.383px',
                flexShrink: 0,
                '&:hover': {
                    border: '1px solid #919EAB',
                },
            }}
        />
    )
}

export default Search
