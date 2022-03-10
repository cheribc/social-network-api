const { User, Thought } = require('../models');

module.exports = {
  // GET all users
    getUser(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => 
                res.status(500).json(err));
                console.error({ message: err });
                res.status(500).json(err);
            
    },
    // GET single user
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
  
    // create a new user
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });  
  },
  // Delete a user
  deleteUser(req, res) {
      User.findOneAndDelete({ _id: req.params.userId })
        .then((users) => 
        !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : User.deleteMany({ _id: { $in: user.thoughts } })
      )
    .then(() => res.json({ message: 'User and thoughts deleted!' }))
    .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
    )
      then((user) =>
        !user
        ? res.status(404).json({ message: 'No user with this ID!' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
  },
};
