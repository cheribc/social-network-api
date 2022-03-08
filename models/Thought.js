// Require schema and model from Mongoose
const { Schema, model } = require('mongoose');

// Construct a new instance of the schema class
const thoughtSchema = new mongoose.Schema(
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
    },   
},
    {
        toJson: {
            getters: true,
        }, 
        id: false,
    }
        // Run function for default date to be today/now
        default: () => Date.now(),
        
    },
    // Refers to user that created this thought
    username: {
        type: String,
        required: true,
    },
    // reactions (These are like replies)
    reactions: {
        // TODO: Array of nested documents created with the reactionSchema
        type: [],
    },
});




// Schema settings: 
// TODO: Create virtual property `reactionCount` that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount')
//Getter
.get(function() {
    return `${this.user} <${this.reaction}`;
})
// Setter to set the user and reaction
.set(function (v) {
    const user = v.split(' ')[0];
    const reaction = v.split( ' ')[1];
    this.set({ user, reaction});
});

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

// Export Thought module
module.exports = Thought;
