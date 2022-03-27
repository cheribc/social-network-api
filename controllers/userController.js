const { User, Thought } = require('../models');

const userController = {
  // GET all users
    getUsers(req, res) {
        User.find()
          .select('-__v')
          .then((dbUserData) => {
              res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },
    // GET single user
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thoughts')
        .populate('friends')
        .then((dbUserData) => {
          if (!dbUserData) {
            return res.status(404).json({ message: 'There is no user found with that ID' });
            }
            res.json(dbUserData);
          })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
    });
  },
  
    // create a new user
    createUser(req, res) {
      User.create(req.body)
        .then((dbUserData) => {
          res.json(dbUserData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });  
  },
  // Delete a user
  deleteUser(req, res) {
      User.findOneAndDelete({ _id: req.params.userId })
        .then((dbUserData) => {
          if (!dbUserData) {
            return res.status(404).json({ message: 'There was no user found with that ID' }); 
          }
        // Get IDs of user's thoughts and delete
        return Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
      })
    .then(() => {
      res.json({ message: 'User and thoughts deleted!' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
  });
},

  // Update a user
  updateUser(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { 
          $set: req.body, 
        },
        { 
          runValidators: true, 
          new: true, 
        }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'There was no user found with this ID!' });
        }
        res.json(dbUserData);
      })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
    });
  },

  // Add a friend to user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, {
      $addToSet: { friends: req.params.friendId } }, {
        new: true
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'There was no user found with this ID!' });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },
  
    // Remove friend from user's friend list
    removeFriend(req, res) {
      User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
        .then((dbUserData) => {
          if (!dbUserData) {
            return res.status(404).json({ message: 'There is no user found with this id!' });
          }
          res.json(dbUserData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },
  };
    
module.exports = userController;