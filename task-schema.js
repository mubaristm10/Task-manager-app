const { Schema, model } = require('mongoose');

const taskSchema = Schema({
  title: { type: String, require: true },
  description: { type: String, trim: true },
  status: { type: String, default: 'pending', enum: ['completed', 'pending'] },
});

const Task = model('task', taskSchema);

module.exports = Task;
