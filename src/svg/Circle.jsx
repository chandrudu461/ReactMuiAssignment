import React from 'react'

const Circle = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="13" fill={color} />
        </svg>
    )
}

export default Circle