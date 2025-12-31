const router = require('express').Router();
const {AddMovie} = require('../controllers/movieController')

router.post('/add-movie',AddMovie);
module.exports = router