// Require schema and model from Mongoose
const { Schema, model }= require('mongoose');

// Construct a new instance of the schema class
const userSchema = new mongoose.Schema(
    {
    // Configure individual properties using Schema Types
    //TODO: add Properties - Required, Trimmed
    username: { 
        type: String, 
        required: true,
        trim: true,
        unique: true
    },
    // Use Mongoose built-in validation for email to prevent duplicates with 'unique' property for each document's given path
    email: { 
        type: String, 
        required: true,
        match: [/.+\@.+\..+/],
        unique: true
    },
    // TODO: Array of _id values referencing the Thought model
    thought: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friend: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    });
    
// TODO: Schema Settings Create a virtual friendCount that retrieves the  length of the user's friends array field on query
 userSchema
    .virtual('friendCount')
    // Getter
    .get(function() {
        return this.friends.length;
    });

const User = model('User', userSchema);

module.exports = User;