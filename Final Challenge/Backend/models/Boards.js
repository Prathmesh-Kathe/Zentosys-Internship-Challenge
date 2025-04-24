const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const ListSchema = new mongoose.Schema({
  title: String,
  tasks: [TaskSchema],
});

const BoardSchema = new mongoose.Schema({
  title: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  lists: [ListSchema],
  activityLog: [String]
});

module.exports = mongoose.model('Board', BoardSchema);
