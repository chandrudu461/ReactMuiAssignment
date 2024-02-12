import React, { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';

const MuiCustomSlider = ({ data }) => {
    const [sliderValue, setSliderValue] = useState(0);

    useEffect(() => {
        const delay = 200; // Adjust the delay time as needed
        const timer = setTimeout(() => {
            setSliderValue(data.percentage); // Set the slider value after the delay
        }, delay);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [data.percentage]);

    return (
        <Slider
            size="medium"
            value={sliderValue}
            valueLabelDisplay="auto"
            max={100}
            min={0}
            sx={{
                width: 255,
                "& .MuiSlider-thumb": {
                    width: 0,
                    height: 0,
                },
            }}
        />
    );
};

export default MuiCustomSlider;