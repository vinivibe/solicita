const mongoose = require('mongoose');

const { Schema } = mongoose;

const TasksSchema = new Schema(
  {
    title: String,
    description: String,
    owner: String,
  },
  {
    timestamps: true,
  },
);
const Tasks = mongoose.model('Task', TasksSchema);
module.exports = Tasks;

// Schema.Types.ObjectId