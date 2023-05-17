# taskManager
task management curd api and authentication + authorization
Certainly! Here's an updated version of the README.md file that includes information on running the test cases:

```markdown
# Task Management API

This API provides endpoints for managing tasks. It allows users to register, login, create tasks, update tasks, complete tasks, and fetch all tasks.

## Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/tshivam1212/taskManager.git
   ```
2. Install dependencies:
   ```shell
   cd repo
   npm install
   ```
3. Set up the configuration:
   - Create a `config.js` file in the root directory.
   - Define the necessary configuration variables, such as `dburl`, `port`, and `jwtSecretKey`.
   - Example:
     ```javascript
     module.exports = {
       dburl: 'mongodb://localhost:27017/taskdb',
       port: 3000,
       jwtSecretKey: 'your_jwt_secret_key',
     };
     ```
4. Start the server:
   ```shell
   npm start
   ```

## Running Test Cases

To run the test cases for the API, follow these steps:

1. Make sure the server is running on a separate terminal or in the background.
2. Open a new terminal and navigate to the project directory.
3. Run the following command to execute the test cases:
   ```shell
   npm test
   ```

The test runner will execute all the defined test cases and display the results in the terminal.

## API Endpoints

### Register User

- URL: `POST /signup`
- Headers: `Content-Type: application/json`
- Body:
  ```json
  {
    "name": "John Doe",
    "mobile": "85743902323",
    "password": "123456543"
  }
  ```

### User Login

- URL: `POST /login`
- Headers: `Content-Type: application/json`
- Body:
  ```json
  {
    "mobile": "85743902323",
    "password": "123456543"
  }
  ```

### Create Task

- URL: `POST /createtask`
- Headers:
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`
- Body:
  ```json
  {
    "taskId": 2,
    "title": "Today's Headline",
    "description": "Weather and cricket description."
  }
  ```

### Update Task

- URL: `PATCH /updateTask`
- Headers:
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`
- Body:
  ```json
  {
    "title": "Today's Headline",
    "description": "Weather and cricket description."
  }
  ```

### Fetch All Tasks

- URL: `GET /fetchAllTask`
- Headers: `Authorization: Bearer <token>`

### Complete Task

- URL: `PATCH /completeTask?_id=<task_id>`
- Headers: `Authorization: Bearer <token>`

Note: Replace `<token>` with the actual token received after login, and `<task_id>` with the ID of the task to complete.

## Error Handling

The API handles errors by returning appropriate status codes and error messages in the response. If an error occurs, the server returns a JSON response with the following format:
```json
{
  "message": "Error message",
  "status": 400
}
```


