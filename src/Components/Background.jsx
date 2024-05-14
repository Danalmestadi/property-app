import React from 'react';
import backgroundImage from '../Assets/bg-house.jpg';

const Background = () => {
    return (
        <div className="relative overflow-hidden bg-cover" style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundPosition: '50%', 
            height: '100vh', 
        }}>
            </div>
    );
};

export default Background;