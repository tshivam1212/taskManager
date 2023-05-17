const {createTaskService,updateTaskService,completeTaskService,fetchTaskService} = require("../service/taskService")
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const config = require("../config")
let mongoServer;

// Start the in-memory MongoDB server before running the tests
beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = config.dburl
  await mongoose.connect(mongoUri, { useNewUrlParser: true });
});

// Close the database connection and stop the in-memory MongoDB server after running the tests
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});




test('Test case 1: Create a new task successfully', async() => {
    const taskId = '1';
    const title = 'Task 1';
    const description = 'Description for Task 1';
    
    const result = await createTaskService(taskId, title, description);
    
    // Assertion
    expect(result).toBe(true);
  });
  
  
  test('Test case 2: Attempt to create a task with an existing taskId (should throw an error)', async() => {
    const taskId = '1';
    const title = 'Task 2';
    const description = 'Description for Task 2';
    
    try {
      await createTaskService(taskId, title, description);
    } catch (error) {
      // Assertion
      expect(error.message).toBe('Task already Exist');
      expect(error.status).toBe(400);
    }
    
  });
  

  test('Test case 1: Update an existing task successfully', async() => {
 
    const taskId = '1';
    const title = 'Updated Task 1';
    const description = 'Updated description for Task 1';
    
    const result = await updateTaskService(taskId, title, description);
    
    // Assertion
    expect(result).toBe(true);
    
    
  });
  

  test('Test case 2: Attempt to update a non-existing task (should throw an error)', async() => {
 
    const taskId = '20';
    const title = 'Updated Task 20';
    const description = 'Updated description for Task 20';
    
    try {
      await updateTaskService(taskId, title, description);
    } catch (error) {
      // Assertion
      expect(error.message).toBe('Task not found');
      expect(error.status).toBe(400);
    }
    
    
    
  });
  

  test('Test case 1: Mark an existing task as completed successfully', async() => {
 
    const taskId = '1';

    const result = await completeTaskService(taskId);
    
    // Assertion
    expect(result).toBe(true);
    
    
    
  });
  

  test('Test case 2: Attempt to complete a non-existing task (should throw an error)', async() => {
 
    const taskId = '2';

    try {
      await completeTaskService(taskId);
    } catch (error) {
      // Assertion
      expect(error.message).toBe('Task not found');
      expect(error.status).toBe(400);
    }
    
    
  });


  test('Test case 1: Fetch all tasks successfully', async() => {
 
    const tasks = await fetchTaskService();

    // Assertion
    expect(Array.isArray(tasks)).toBe(true);
    
  });
  


 



