import React, { memo } from 'react';

const Pagination = memo(({ next, prev, onPageChange }) => {
    return (
        <div className="pagination">
            <button
                onClick={() => onPageChange(prev)}
                disabled={!prev}
                className="pagination-btn"
            >
                Previous
            </button>
            <button
                onClick={() => onPageChange(next)}
                disabled={!next}
                className="pagination-btn"
            >
                Next
            </button>
        </div>
    );
});

export default Pagination;
