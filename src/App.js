import { useState } from 'react';
import './App.css';
import { todosData } from './todosData';

// App Component
function App() {

  //  use state hooks
  const [todos, setTodo] = useState(todosData); 
  
  const newTodo = {
    "id": ++todos.length,
    "title": "",
    "status": ""
  };

  const createTodo = (e) => {
    e.preventDefault();
    document.getElementById("favDialog").showModal();
    setTodo([...todos, newTodo]);
  }

  const updateTodo = (e) => {
    console.log("updating!!!");
  }
  
  const deleteTodo = (e) => {
    console.log(e.target.id);
    setTodo(todos.filter(a => a.id !== Number(e.target.id)));
  }

  return (
    <>
    {/* Header of the app */}
    <header>
      <span>TODO App</span>
      <span id="addTodo">
        <form onSubmit={createTodo}>
          <input type="text" onBlur={e => newTodo.title = e.target.value} placeholder="Add Todo ...." name="addtodo"/>
          <input type="submit" value="Add Todo" />
        </form>
      </span>
    </header>

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



    {/* pure HTML dialog element using */}
    <dialog id="favDialog">
      <form>
        <p>
          <label>
            Favorite animal:
            <select>
              <option value="default">Choose…</option>
              <option>Brine shrimp</option>
              <option>Red panda</option>
              <option>Spider monkey</option>
            </select>
          </label>
        </p>
        <div>
          <button value="cancel" formmethod="dialog">Cancel</button>
          <button id="confirmBtn" value="default">Confirm</button>
        </div>
      </form>
    </dialog>

    </>
  );
}

export default App;