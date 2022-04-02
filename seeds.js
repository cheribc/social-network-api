const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
    console.log('Mongo Connection Open!');
})
.catch((err) => {
    console.log(err);
});

const seedUsers = [
    {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
       
    },
    {
        "username": "mikey",
        "email": "mikey@gmail.com"
       
    },
    {
        "username": "jennie",
        "email": "jennie@gmail.com"
       
    },
    {
        "username": "bella",
        "email": "bella@gmail.com"
       
    },
];

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
};

seedDB().then(() => {
    mongoose.connection.close();
});