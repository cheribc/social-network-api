// Require schema and model from Mongoose
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = new require('../utils/dateFormat');

// Create new Schema instance
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Please leave a thought!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);
 

thoughtSchema.virtual('reactionCount')
//Getter
.get(function() {
    return this.reactions.length;
});

// Initialize Thought model
const Thought = model('Thought', thoughtSchema);

// Export Thought module
module.exports = Thought;
