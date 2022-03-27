const { User, Thought } = require('../models');

const thoughtController = {
  // get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .sort({ createdAt: -1 })
            .then((dbThoughtData) => {
              res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log( err );
                res.status(500).json(err);
            });
    },
    // get single thought by id
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .then((dbThoughtData) => {
          if (!dbThoughtData) {
            return res.status(404).json({ message: 'No thought with that ID' });
          }
          res.json(dbThoughtData)
          })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
    });
  },
    // create a new thought
    createThought(req, res) {
      Thought.create(req.body)
        .then((dbThoughtData) => {
          return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: dbThoughtData._id } },
            { new: true }
          );
        })
        .then((dbUserData) => {
          if (!dbUserData) {
            return res.status(404).json({ message: 'New thought created but there is no user found with this id!'});
          }
          res.json({ message: 'New thought successfully created!'});
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    },

  // Update thought
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'There was no thought found with this id!' });
        }
      // remove thought id from the user's field
      return User.findOneAndUpdate(
        { thoughts: req.params.thoughtId },
        { $pull: { thoughts: req.params.thoughtId } },
        { new: true }
      );
  })
  .then((dbUserData) => {
    if (!dbUserData) {
      return res.status(404).json({ message: 'New thought created but there is no user found with this id!'});
    }
    res.json({ message: 'Thought was successfully deleted!'});
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
},

// Add reaction to a thought
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'There was no thought found with this id!' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      })
  },
  // Remove a reaction from a thought
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
    .then((dbThoughtData) => {
      if (!dbThoughtData) {
        return res.status(404).json({ message: 'There was no thought found with this id!' });
      }
      res.json(dbThoughtData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },
};

module.exports = thoughtController;