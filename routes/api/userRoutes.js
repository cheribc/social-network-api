const router = require('express').Router();

const {
    getAllUser,
    getUserById, 
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// GET, POST /api/user
router.route('/').get(getAllUser).post(createUsers);

// GET, PUT, DELETE /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// POST, DELETE /api/user/:userId/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)


module.exports = router;




