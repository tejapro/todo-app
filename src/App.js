import { useState } from 'react';
import './App.css';
import { todosData } from './todosData';

// App Component
function App() {

  //  use state hooks
  const [todos, setTodo] = useState(todosData); 
  
  let newTodo = {
    "id": todos.length + 1,
    "title": "",
    "status": ""
  };

  const createTodo = (e) => {
    e.preventDefault();
    setTodo([...todos, newTodo]);
    document.getElementById("favDialog").close();
  }

  const updateTodo = (e) => {
    newTodo = todos[Number(--e.target.id)];
    console.log("updating!!!" + newTodo.title + e.target.id);
    document.getElementById("favDialog").showModal();
  }
  
  const deleteTodo = (e) => {
    console.log(e.target.id);
    setTodo(todos.filter(a => a.id !== Number(e.target.id)));
  }

  return (
    <>
    {/* Header of the app */}
    <header>TODO App</header>

    {/* List of todos - Section */}
    <section>
      <h3>List of todos</h3>
      <ul>
        {todos.map( todo => {
          return(
          <li key={todo.id}>
            <div>
              <h6><span>{todo.id}</span>{todo.title}</h6>
            </div>
            <button id={todo.id} onClick={deleteTodo}>Delete</button>
            <button id={todo.id} onClick={updateTodo}>Update</button>
          </li>
          );
        })}
      </ul>
    </section>

    <button onClick={() => document.getElementById("favDialog").showModal()}>Add Todo</button>

    {/* pure HTML dialog element using */}
    <dialog id="favDialog">
      <form onSubmit={createTodo}>
          <button onClick={() => document.getElementById("favDialog").close()}>&times;</button>
        <p>
        <input type="text" value={newTodo.title} required onBlur={e => newTodo.title = e.target.value} placeholder="Add Todo ...."/>
          <label>
            Status:
            <select required value={newTodo.status} onChange={e => newTodo.status = e.target.value}>
              <option>Choose…</option>
              <option>Completed</option>
              <option>Working</option>
              <option>Stopped</option>
            </select>
          </label>
        </p>
        <div>
          <button type="submit" value="default">Confirm</button>
        </div>
      </form>
    </dialog>

    </>
  );
}

export default App;