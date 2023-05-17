const Task = require('../models/taskModel');
const {createTaskService,updateTaskService,completeTaskService,fetchTaskService} = require("../service/taskService")

// Create a new task
exports.createTask = async (req, res,next) => {
    try {
        const { taskId, title, description } = req.body;
        let  creationStatus = await createTaskService(taskId, title,description)
        res.status(201).json({
            status:201,
            message:`Successfully Created Task with status ${creationStatus}`
        });
    } catch (error) {
        next(error)
    }
};

// Update an existing task
exports.updateTask = async (req, res) => {
    try {
        const { taskId, title, description } = req.body;
        let updationStatus = await updateTaskService(taskId,title,description)
        res.status(201).json({
            status:200,
            message:`Successfully Updated Task with status ${updationStatus}`
        });
    } catch (error) {
        next(error)

    }
};

// Mark a task as completed
exports.completeTask = async (req, res) => {
    try {
        var  id  = req.query._id;
        let taskUpdateStatus = await completeTaskService(id)
        res.status(201).json({
            status:200,
            message:`Successfully Mark Task as completed with status ${taskUpdateStatus}`
        });
    } catch (error) {
        next(error)
    }
};

// Get a list of all tasks
exports.getAllTasks = async (req, res) => {
    try {        
        let tasks = await fetchTaskService()
        res.status(201).json(tasks);
    } catch (error) {
        next(error)
    }
};
