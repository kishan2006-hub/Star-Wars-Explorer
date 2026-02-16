import { useState, useEffect, useCallback } from 'react';
import { fetchCharacters } from '../services/api';

export const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);

    const loadCharacters = useCallback(async (url) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchCharacters(url);
            setCharacters(data.results);
            setNextPage(data.next);
            setPrevPage(data.previous);
        } catch (err) {
            setError('Failed to fetch characters. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadCharacters();
    }, [loadCharacters]);

    return {
        characters,
        loading,
        error,
        nextPage,
        prevPage,
        loadCharacters
    };
};
