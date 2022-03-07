const connection = require('../config/connection');
const { User, Thought } = require('../models');

// TODO:Import functions for seed data


// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await User.deleteMany({});
  await Thought.deleteMany({});

  // TODO: Empty arrays 
const User = [];
const Thought = [];


});