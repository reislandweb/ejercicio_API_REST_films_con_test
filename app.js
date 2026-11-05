const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

const filmsRoutes = require('./routes/films.routes.js');

app.use(express.json());

// IMPORTANTE: Debe ser en singular (/api/film) según el enunciado
app.use('/api/film', filmsRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Middleware para rutas no encontradas (Exigido por los tests)
app.use((req, res) => {
    res.status(404).json({ message: 'Film not found' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;