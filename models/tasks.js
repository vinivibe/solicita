const mongoose = require('mongoose');

const { Schema } = mongoose;

const TasksSchema = new Schema(
  {
    title: String,
    description: String,
    owner: String,
    types: {
      type: String,
      enum: [
        'Briefing',
        'Analise',
        'Desenvolvimento',
        'Aprovação',
        'Refação',
      ],
    },
    states: {
      type: String,
      enum: [
        'Backlog',
        'Fazendo',
        'Feito',
      ],
    },
  },
  {
    timestamps: true,
  },
);
const Tasks = mongoose.model('Task', TasksSchema);
module.exports = Tasks;

// Schema.Types.ObjectId