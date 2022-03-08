const router = require('express').Router();

const {
    getSingleThought,
    getThought,
    createThought,
} = require('../../controllers/thoughtController');

/* /api/thoughts
GET to get all thoughts
GET to get a sincle thought by its _id
POST to create a new thought (don't forget to push the created thought's _id to associated user's thoughts array field) 
{
    "username": "lernantino",
    "email": "lernantino@gmail.com"
} 
PUT to update a user by its _id
DELETE to remove user by its _id*/

router.route('/').get(getUser).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

module.exports = router;