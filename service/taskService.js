const Task = require('../models/taskModel');

let createTaskService = async(taskId, title, description) => {
    try {
        const newtask = new Task({ taskId, title, description });
        const task = await Task.findOne({taskId : taskId},{ new: true });
        if(task){
            let error = new Error('Task already Exist')
            error.status=400
            throw (error)
        }else{
            await newtask.save();
            return true    
        }
    } catch (error) {
        throw (error)
    }


}


let updateTaskService = async (taskId, title, description) => {
    try {
        const task = await Task.findOneAndUpdate({taskId : taskId}, { title, description }, { new: true });
        if (!task) {
            let error = new Error('Task not found')
            error.status=400
            throw (error)
        }
        return true
    } catch (error) {
        throw (error)
    }

}


let completeTaskService = async(taskId) => {
    try {
        const task = await Task.findOneAndUpdate({taskId: taskId}, { completed: true }, { new: true });
        if (!task) {
            let error = new Error('Task not found')
            error.status=400
            throw (error)        
        }
        return true
    } catch (error) {
        throw (error)
    }

}

let fetchTaskService = async() => {
    try {
        const tasks = await Task.find();
        return tasks
    } catch (error) {
        throw (error)
    }

}



module.exports={
    createTaskService:createTaskService,
    updateTaskService:updateTaskService,
    completeTaskService:completeTaskService,
    fetchTaskService:fetchTaskService
}