const {registerUser,loginUserService,genrateToken} = require("../service/userService")
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




test('Test case 1: Register a new user successfully', async() => {
    const name = 'John Doe';
    const mobile = '1234567890';
    const password = 'password123';
    
    const result = await registerUser(name, mobile, password);
    
    // Assertion
    expect(typeof result).toBe('object');
  });
  
  
  test('Test case 2: Attempt to register an already existing user (should throw an error', async() => {
    const name = 'Jane Smith';
    const mobile = '9876543210';
    const password = 'password123';
    
    try {
      await registerUser(name, mobile, password);
    } catch (error) {
      // Assertion
      expect(error.message).toBe('User is already registered! Please login');
      expect(error.status).toBe(400);
    }
    
  });
  

  test('Test case 1: Login with valid credentials and receive a token', async() => {
 
    const mobile = '1234567890';
    const password = 'password123';
    
    const token = await loginUserService(mobile, password);
    
    // Assertion
    expect(typeof token).toBe('string');
    
    
  });
  

  test('Test case 2: Attempt to login with an invalid mobile number (should throw an error)', async() => {
 
    const mobile = '9876543210';
    const password = 'password123';
    
    try {
      await loginUserService(mobile, password);
    } catch (error) {
      // Assertion
      expect(error.message).toBe('User not found');
      expect(error.status).toBe(400);
    }
    
    
  });
  

  test('Test case 3: Attempt to login with an incorrect password (should throw an error)', async() => {
 
    const mobile = '1234567890';
    const password = 'wrongpassword';
    
    try {
      await loginUserService(mobile, password);
    } catch (error) {
      // Assertion
      expect(error.message).toBe('Invalid user');
      expect(error.status).toBe(400);
    }
    
  });
  

  test('Test case 4: Generate a token successfully', async() => {
 
    const password = 'password123';

    const token = await genrateToken(password);
    
    // Assertion
    expect(typeof token).toBe('string');
    
  });



 



