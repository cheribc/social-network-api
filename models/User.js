// Require schema and model from Mongoose
const { Schema, model }= require('mongoose');

// Construct a new instance of the schema class
const userSchema = new Schema(
    {
    // Configure individual properties using Schema Types
    //TODO: add Properties - Required, Trimmed
        username: { 
            type: String, 
            unique: true,
            required: true,
            trim: true,
        
    },
    // Use Mongoose built-in validation for email to prevent duplicates with 'unique' property for each document's given path
    email: { 
            type: String, 
            required: true,
            unique: true,
            match: [/.+\@.+\..+/],
            // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'],
    },
    // TODO: Array of _id values referencing the Thought model
    thoughts: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Thought' 
        },
    ],
    friends: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'User', 
        },
    ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
    
// TODO: Schema Settings Create a virtual friendCount that retrieves the  length of the user's friends array field on query
 userSchema
    .virtual('friendCount')
    // Getter
    .get(function() {
        return this.friends.length;
    });

// Create User model and export
const User = model('User', userSchema);


module.exports = User;