const router = require('express').Router();

const {
    getSingleThought,
    getThought,
    createThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getUser).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

module.exports = router;