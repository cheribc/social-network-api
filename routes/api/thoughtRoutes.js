const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    addReaction,
    createThought,
    removeReaction,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

// GET /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// GET, PUT, DELETE  /api/thought/:id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST  /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE  /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)


module.exports = router;

