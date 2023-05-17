const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskId: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
        ,
    },
});

module.exports = mongoose.model('Task', taskSchema);
