import React, { useState, useEffect, useCallback } from 'react';
import { useCharacters } from './hooks/useCharacters';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';
import Pagination from './components/Pagination';
import Loader from './components/Loader';
import Starfield from './components/Starfield';
import './App.css';

function App() {
  const { characters, loading, error, nextPage, prevPage, loadCharacters } = useCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const subtitleText = "Explore the characters of the Star Wars universe";
  useEffect(() => {
    if (typingIndex < subtitleText.length) {
      const timer = setTimeout(() => {
        setDisplayedSubtitle((prev) => prev + subtitleText[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const restartTimer = setTimeout(() => {
        setDisplayedSubtitle("");
        setTypingIndex(0);
      }, 1500);
      return () => clearTimeout(restartTimer);
    }
  }, [typingIndex, subtitleText]);

  const handleCardClick = useCallback((character) => {
    setSelectedCharacter(character);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCharacter(null);
  }, []);

  const handlePageChange = useCallback((url) => {
    if (url) {
      loadCharacters(url);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [loadCharacters]);

  if (error) {
    return (
      <div className="app-container">
        <Starfield />
        <header>
          <h1>Star Wars Explorer</h1>
        </header>
        <div className="error-container">
          <p>{error}</p>
          <button onClick={() => loadCharacters()} className="pagination-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Starfield />
      <header>
        <h1>Star Wars Explorer</h1>
        <p className="typewriter">
          {displayedSubtitle}
          <span className="cursor">|</span>
        </p>
      </header>

      <main>
        {loading ? (
          <Loader />
        ) : (
          <>
            {characters.length > 0 ? (
              <>
                <div className="character-grid">
                  {characters.map((char) => (
                    <CharacterCard
                      key={char.url}
                      character={char}
                      onClick={handleCardClick}
                    />
                  ))}
                </div>
                <Pagination
                  next={nextPage}
                  prev={prevPage}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="empty-state">
                <p>No characters found.</p>
              </div>
            )}
          </>
        )}
      </main>

      <CharacterModal
        character={selectedCharacter}
        onClose={handleCloseModal}
      />

      <footer style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        <p>&copy; 2026 Star Wars Explorer.</p>
      </footer>
    </div>
  );
}

export default App;
