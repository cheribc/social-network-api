const router = require('express').Router();
/* API ROUTES /api/users 
GET all users
GET single user by its _id & populated thought and friend data
POST a new user: 


const {
    getSingleUser,
    getUser,
    createUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// // /api/user
// router.route('/').get(getUser).post(createUser);
// // /api/user/:userId
// router.route('/:userId').get(getSingleUser);
// // /api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').post(addFriend);
// router.route('/:userId/friends/:friendId').delete(removeFriend);

