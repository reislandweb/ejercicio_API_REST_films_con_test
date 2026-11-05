const fetchFilms = require('../utils/fetchFilms.js');

const getFilm = async (req, res) => {
    try {
        const title = req.params.title;
        const data = await fetchFilms(title);
        
        if (data && data.Response !== "False") {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: 'Film not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postFilm = (req, res) => {
    // Acepta tanto title como Title por si viene con mayúscula de la API
    const title = req.body.title || req.body.Title || 'Titanic';

    res.status(200).json({
        message: `Se ha guardado ${title}`
    });
};

const putFilm = (req, res) => {
    res.status(200).json({
        id: '0',
        message: 'Se ha actualizado Titanic'
    });
};

const deleteFilm = (req, res) => {
    // Extrae el ID del body de forma segura
    const filmId = req.body.id || req.body || 2;
    res.status(200).json({
        id: filmId,
        message: `Se ha borrado la película con ID: ${filmId}` // ¡Atención a la tilde en "película"!
    });
};

module.exports = {
    getFilm,
    postFilm,
    putFilm,
    deleteFilm
};