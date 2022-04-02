const names = [
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',  
];

const thoughtText = [
    'I am so tired!',
    'Good morning!!',
    'Hello World',
    'Class is over now',
    'Congratulations',
    'Great job on the assignment!',
    'I am so happy right now...',
    'Well done',
    'I am glad that you liked it',
    'Are you finished yet?',
    'When do you arrive?',
    'I love that color gradient',
    'This is really wild!',
    'Lets go',
    'Yesssss',
    
];

const reactionBody = [
    'Wow',
    'boooo',
    'yay',
    'no way',
    'like',
    'Do not like',
    'love it',
    'sad',
    'ok',
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// // Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

  

// Function to generate random thoughts that we can add to user object.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughtText),
      username: getRandomName(),
    });
  }
  return results;
};

// // Function to generate random reactions that we can add to user thought.
// const getRandomReactions = (int) => {
//     let results = [];
//     for (let i = 0; i < int; i++) {
//       results.push({
//         reactionBody: getRandomArrItem(reactionBody),
//         // username: getRandomName(),
//       });
//     }
//     return results;
//   };

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts };