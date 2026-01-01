const router = require('express').Router();
const {AddMovie, getAllMovies, deleteMovies, updateMovie} = require('../controllers/movieController')

router.post('/add-movie',AddMovie);
router.get('/get-all-movies', getAllMovies);
router.post('/delete-movie', deleteMovies);
router.post('/update-movie', updateMovie);
module.exports = router