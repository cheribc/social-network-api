const router = require('express').Router();

const {
    getAllUsers,
    getUserById, 
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// GET, POST /api/user route
router.route('/')
// pass api endpoint to userController
.get(getAllUsers).post(createUser);

// GET, PUT, DELETE /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// POST, DELETE /api/users/:userId/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);


module.exports = router;




