// Require schema and model from Mongoose
const { Schema, model, Types } = require('mongoose');

// reactionSchema defines schema of subdocument parent thoughtSchema
const reactionSchema = new Schema(
{
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => Types.ObjectId(),
    },

    reactionBody: {
        type: String,
        minlength: 1,
        maxlength: 280,
        required: true,
    },

    username: {
        type: String,
        required: true,
    },
    // Use built-in date method to get current date
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, 
{
    toJSON: {
        getters: true,
    },
}
);
// Construct a new instance of the schema class
const thoughtSchema = new Schema(
    {
    // Configure individual properties using Schema Types
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
            // TODO: Use a getter method to format the timestamp on query
            timestamps: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            timestamps: true
        }, 
        // Refers to user that created this thought 
        username: {
            type: String,
            required: true,
        },
        // reactions (These are like replies)
        reactions: [reactionSchema],
        },
    {
        toJSON: {
            virtual: true,
            getters: true,
        }, 
        id: false,
    }
);

// Schema settings: 
// TODO: Create virtual property `reactionCount` that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount')
//Getter
.get(function() {
    return this.reactions.length;
});

// Initialize Thought model
const Thought = model('Thought', thoughtSchema);

// Timestamp for reactions
// const doc = await Thought.create({ reaction: " " });

// doc.createdAt;
// doc.updatedAt;
// doc.createdAt instanceof Date;

// Export Thought module
module.exports = Thought;
