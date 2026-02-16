import React from 'react';
import './Starfield.css';

const Starfield = () => {
    return (
        <div className="starfield-container">
            <div className="stars stars-small"></div>
            <div className="stars stars-medium"></div>
            <div className="stars stars-large"></div>
            <div className="nebula"></div>
        </div>
    );
};

export default Starfield;
