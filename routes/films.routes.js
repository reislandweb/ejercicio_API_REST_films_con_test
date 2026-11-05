const router = require('express').Router();
const filmsControllers = require('../controllers/films.controller.js');

router.get("/:title", filmsControllers.getFilm);
router.post("/", filmsControllers.postFilm);
router.put("/", filmsControllers.putFilm);
router.delete("/", filmsControllers.deleteFilm);

module.exports = router;