import React from 'react';

const CharacterModal = ({ character, onClose }) => {
    if (!character) return null;

    const heightInMeters = character.height !== 'unknown'
        ? (parseFloat(character.height) / 100).toFixed(2)
        : 'unknown';

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <header>
                    <h2>{character.name}</h2>
                </header>
                <div className="modal-body">
                    <div className="detail-item">
                        <strong>Height</strong>
                        <span>{heightInMeters} m</span>
                    </div>
                    <div className="detail-item">
                        <strong>Mass</strong>
                        <span>{character.mass} kg</span>
                    </div>
                    <div className="detail-item">
                        <strong>Created</strong>
                        <span>{formatDate(character.created)}</span>
                    </div>
                    <div className="detail-item">
                        <strong>Films</strong>
                        <span>{character.films?.length || 0}</span>
                    </div>
                    <div className="detail-item">
                        <strong>Birth Year</strong>
                        <span>{character.birth_year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterModal;
