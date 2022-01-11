import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../Hooks/useForm";

import "./style.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleDelete = (todoID) => {
    const action = {
      type: "delete",
      payload: todoID,
    };
    dispatch(action);
  };
  const handleToggle = (todoID) => {
    dispatch({
      type: "toggle",
      payload: todoID,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p
                  className={`${todo.done && "complete"}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="Aprender..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
