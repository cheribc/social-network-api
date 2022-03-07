// Require schema and model from Mongoose
const mongoose = require('mongoose');

// Construct a new instance of the schema class
const userSchema = new mongoose.Schema({
    // Configure individual properties using Schema Types
    //TODO: add Properties - Required, Trimmed
    username: { type: String, required: true },
    email: { type: String, required: true },
    // TODO: Array of _id values referencing the Thought model
    // TODO: Add Properties - Unique, must match valid email address through Mongoose matching validation
    thoughts: { type: Array, required: false },
    // TODO: Array of _id values referencing the User Model (self-reference)
    friends: { type: Array, required: false }
});

// TODO: Schema Settings Create a virtual friendCount that retrieves the  length of the user's friends array field on query