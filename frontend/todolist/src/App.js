import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/todos');
      const data = await response.json();
      setTodos(data);
      setTodos(data.reverse());
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addTask = async () => {
    try {
      await fetch('http://localhost:5000/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: newTask }),
      });
      setNewTask('');
       await fetchTodos();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: 'DELETE',
      });
     await fetchTodos();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  
  return (
    <div className='back'>
      <h3 className="text-center todo">To Do List App</h3>
      <form className="col-md-12  " id="shoeb">
        <div className="input-group mb-3">
          <span className="input-group-text">Enter the task:</span>
          <input type="text" className="form-control" placeholder="Enter the task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button className="btn btn-success" onClick={addTask}>Add product</button>
        </div>
      </form>
      <div className="container-fluid listproductcss">
        {/* <AddProduct getData={getData} /> */}
        <div className="tablecss">
          <table className="table table-secondary">
            <tbody>
              {
                todos.map((todo) => (
                  <tr key={todo.id}>
                    <td id='tabllist'>{todo.task} <button className='shoeb'  onClick={() => deleteTask(todo.id)}><div id='asd'>X</div></button> </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>

  )
}

export default App;
