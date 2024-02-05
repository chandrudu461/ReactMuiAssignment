import React from 'react';
import User from '../images/userProfile.png';
const UserProfileSvg = () => {
    return (
        <div>
            <img
                src={User}
                alt="Description of the image"
                width={48}
                height={48}
            />
        </div>
    )
}

export default UserProfileSvg;