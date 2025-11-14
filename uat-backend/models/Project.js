const mongoose = require('mongoose');

const subTaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['Available', 'In Progress', 'Done', 'N/A'], default: 'Available' },
  uom: { type: String, required: true },
  qty: { type: Number, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startDate: Date,
  endDate: Date,
  documents: [{ type: String }] // AWS S3 URLs
});

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subTasks: [subTaskSchema]
});

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['Active', 'Completed', 'On Hold'], default: 'Active' },
  tasks: [taskSchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  team: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  startDate: Date,
  endDate: Date
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);