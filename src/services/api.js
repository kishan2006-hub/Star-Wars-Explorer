
const BASE_URL = 'https://swapi.dev/api';

export const fetchCharacters = async (url = `${BASE_URL}/people`) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        return await response.ok ? response.json() : null;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};
