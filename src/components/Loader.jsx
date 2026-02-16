import React, { memo } from 'react';

const Loader = memo(() => {
    return (
        <div className="loader-container">
            <div className="spinner"></div>
            <p>Loading Star Wars characters...</p>
        </div>
    );
});

export default Loader;
