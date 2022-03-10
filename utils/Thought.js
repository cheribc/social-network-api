const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect('mongodb://localhost/thought', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
// TODO: /api/thoughts  
// GET to get all thoughts, GET single thought by its _id, POST to create new thought (don't forget to push the created thought's _id to associated user's thoughts array field)

const thoughtSeed = [
    {
        "thoughtText": "Here's a cool thought...",
        "username": "lernantino",
        "userId": "5edff358a0fcb779aa7b118b"

    },
],
},
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id