const mongoose = require('mongoose')

const TaskfollowSchema = new mongoose.Schema({
  taskfollow: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('TaskFollow', TaskfollowSchema)
