const router = require('express').Router();

const {
    getUsers,
    getSingleUser, 
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// GET, POST /api/users
router.route('/').get(getUsers).post(createUser);

// GET, PUT, DELETE /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// POST, DELETE /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;




