const connection = require('../config/connection');
const { User, Thought } = require('../models');

// TODO:Import functions for seed data
// const { getUsers, getSingleUser, createUser, updateUser, deleteUser, removeFriend }
// = require('./data');
const usersData = require('./users.json');

const thoughtsData =require('./thoughts.json');

const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

// Creates a connection to mongodb
connection.once('open', async () => {
  
  console.log('connected');
// Start the seeding runtime timer
// console.time('seeding');

// Drop existing User
await User.deleteMany({});

// Drop existing thoughts
await Thought.deleteMany({});

 // TODO: Create Empty array for user 
 const users = [];

 // Create Empty array for thoughts
 const thoughts = getRandomThoughts(10);

// function to get reactions
// const reactionSchema = getRandomReactions(5);

// Loop through usernames
 for (let i = 0; i < 10; i++) {
  const fullName = getRandomName();
  const first = fullName.split(' ')[0];
  const last = fullName.split(' ')[1];
  const username = fullName;
  const email = `${fullName}@gmail.com`;
  

  users.push({
    first,
    last,
    username,
    email,
     
  });
}
 
//   const randomThoughts = getRandomThoughts() {
//   const thoughtText = thoughts;

//   const username = users;

//   thoughts.push({
//     username,
//     thoughtText,
//   });
// }





await User.collection.insertMany(users);
await Thought.collection.insertMany(thoughts);
// await reactionSchema.insertMany(reactionSchema);

// loop through the saved thoughts, for each user we need to generate a thought response and insert the thought responses
console.table(users);
console.table(thoughts);
// console.table(reactionSchema);
console.info('Seeding complete! 🌱');
process.exit(0);
});




 


