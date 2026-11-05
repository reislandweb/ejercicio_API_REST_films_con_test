
const fetch = require('node-fetch');

const fetchFilms = async (title) => {
    try {
        const apiKey = process.env.API_KEY;
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error("Error fetching film:", error);
        return null;
    }
};

module.exports = fetchFilms;