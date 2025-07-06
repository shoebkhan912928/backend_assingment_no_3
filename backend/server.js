const express = require('express');
const mysql = require('mysql');
const cors=require('cors')
// const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors())
const PORT = 5000;
// app.use(bodyParser.json());

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todolist'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// GET endpoint to fetch all tasks
app.get('/api/todos', (req, res) => {
  connection.query('SELECT * FROM todos', (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Error fetching todos', error });
    } else {
      res.status(200).json(results);
    }
  });
});

// POST endpoint to add a new task
app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  connection.query('INSERT INTO todos (task) VALUES (?)', [task], (error) => {
    if (error) {
      res.status(500).json({ message: 'Error adding todo', error });
    } else {
      res.status(201).json({ message: 'Todo added successfully', task });
    }
  });
});

// DELETE endpoint to delete a task by ID
app.delete('/api/todos/:id', (req, res) => {
  const taskId = req.params.id;
  connection.query('DELETE FROM todos WHERE id = ?', [taskId], (error) => {
    if (error) {
      res.status(500).json({ message: 'Error deleting todo', error });
    } else {
      res.status(200).json({ message: 'Todo deleted successfully' });
    }
  });
});

app.listen(PORT, () =>  {
  console.log(`Server running on port ${PORT}`);
});
