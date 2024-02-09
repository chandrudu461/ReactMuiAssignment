import React from 'react'

const ImageComponent = ({ imageUrl }) => {
    return (
        <div style={{
            width: 50,
            height: 50,
            borderRadius: 24,
            background: `url(${imageUrl}) lightgray 50% / cover no-repeat, #C4C4C4`,
        }}>
        </div>
    )
}

export default ImageComponent