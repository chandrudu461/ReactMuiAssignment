import React from "react";
import { useSelector } from 'react-redux'
import { useTheme } from "@mui/material";

const Units = ({ unit_name, id, onClick }) => {
    const theme = useTheme();
    const selectedUnitId = useSelector(state => state.unit.selectedUnitId);
    const fontColor = (selectedUnitId === id) ? theme.palette.primary.gradient800 : theme.palette.grey[400];
    const fontWeight = (selectedUnitId === id) ? 600 : 300;
    return (
        <div
            onClick={() => onClick(id)}
            style={{
                color: fontColor,
                fontFamily: '"Axiforma-Book", sans-serif',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight,
                lineHeight: 'normal',
                cursor: 'pointer',
                borderBottom: selectedUnitId === id ? '3px solid #0946C4' : 'none'
            }}
        >
            {unit_name}
        </div>
    );
}

export default Units;
