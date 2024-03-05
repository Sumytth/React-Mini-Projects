import React, { useState } from "react";
import './todo.css'

function generateId() {
  return Math.floor(Math.random() * 10);
}

function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setTodo((prevTodo) =>
      prevTodo.concat({
        text: input,
        id: generateId()
      })
    );
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const clear = (id) => {
    setTodo((prevTodo) => prevTodo.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="container">
        <input
          className="box"
          type="text"
          value={input}
          placeholder="NewTodo"
          onChange={handleChange}
        />
        <button onClick={handleClick} className="fbutton" >Add</button>
        {todo.map(({ text, id }) => (
          <ul key={id}>
            <li>
              <span>{text}</span>
              <button onClick={() => clear(id)}>X</button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Todo;
