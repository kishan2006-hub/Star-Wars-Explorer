import React, { memo } from 'react';

const CharacterCard = memo(({ character, onClick }) => {
    return (
        <div className="character-card" onClick={() => onClick(character)}>
            <div className="card-content">
                <h3>{character.name}</h3>
                <p>Birth Year: {character.birth_year}</p>
                <p>Gender: {character.gender}</p>
                <div className="view-details">Click for details</div>
            </div>
        </div>
    );
});

export default CharacterCard;
