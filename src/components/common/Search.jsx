import React from "react";
// import './Search.css'
import { Box } from "@mui/material"
import SearchStatusIcon from "../../assets/svg/SearchStatusIcon";

const Search = () => {
    return (
        <Box
            sx={{
                height: '35px',
                width: '144px',
                display: 'flex',
                flexDirection: 'row',
                fontFamily: '"Axiforma-SemiBold", sans-serif',
                borderRadius: '6.64px',
                border: '1px solid #f4f6f8',
                background: '#e5eaef',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Box
                sx={{
                    width: '17.514px',
                    height: '18.329px',
                    flexShrink: 0,
                    marginRight: '11.38px',
                }}>
                <SearchStatusIcon />
            </Box>
            <Box style={{ fontWeight: 300, fontSize: 12, color: '#919EAB' }}>Search topics</Box>
        </Box>
    );
}

export default Search;