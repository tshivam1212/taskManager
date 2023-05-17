const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware')


//user to register
router.post('/signup', userController.register)

router.post('/login', userController.login)

// Create a new task
router.post('/createtask', authMiddleware.validatetoken, taskController.createTask);

// Update an existing task
router.post('/updateTask', authMiddleware.validatetoken ,taskController.updateTask);

// Mark a task as completed
router.patch('/completeTask',authMiddleware.validatetoken, taskController.completeTask);

// Get a list of all tasks
router.get('/fetchAllTask', authMiddleware.validatetoken,taskController.getAllTasks);

module.exports = router;
