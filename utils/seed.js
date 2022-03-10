const connection = require('../config/connection');
const { User, Thought } = require('../models');

// TODO:Import functions for seed data
const { getAllUsers, getUserbyId, crateUser, updateUser, deleteUser, deleteFriends }
= require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
});
// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await User.deleteMany({});
  await Thought.deleteMany({});

  // TODO: Create Empty arrays 
const users = [];
const thoughts = [];


});