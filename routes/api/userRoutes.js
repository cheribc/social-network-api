const router = require('express').Router();

const {
    // getUsers,
    getAllUsers,
    getUserById, 
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// GET, POST /api/user route
router.route('/').get(getAllUsers).post(createUser);
// pass api endpoint to userController

// GET, PUT, DELETE /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// POST, DELETE /api/users/:userId/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);


module.exports = router;




