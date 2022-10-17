import React from "react";
import { connect } from "react-redux";
import {
  addTodo,
  moveToCompleted,
  moveToInCompleted,
  removeTodo,
  updateTodo,
} from "./redux/todoReducer";

function TodoList({
  btnText,
  setBtnText,
  editId,
  setEditId,
  inputText,
  setInputText,
  id,
  status,
  tasks,
  setTasks,
  todos,
  moveToCompleted,
  moveToInCompleted,
  removeTodo,
  updateTodo,
}) {
  console.log(tasks);

  function editTask() {}

  function handleCheckboxChange(task) {
    // console.log(event.target.parentElement.getAttribute("id"));

    // debugger;
    if (task.completed === false) {
      moveToCompleted([task.id]);
    } else {
      moveToInCompleted([task.id]);
    }
  }

  function handleDeleteClick(task) {
    removeTodo({ id: task.id });
  }

  function handleEditClick(task) {
    // debugger;
    console.log("edit");

    console.log(task);

    setEditId(task.id);
    setInputText(task.text);
    setBtnText("Update");
    window.scrollTo(0, 0);
  }

  return (
    <ul id={id}>
      {todos
        .filter((todo) => todo.completed === status)
        .map((task) => (
          <li key={task.id} id={task.id}>
            <input
              type="checkbox"
              onChange={(event) => handleCheckboxChange(task)}
              checked={task.completed === true}
            />
            <label>{task.text}</label>
            <input type="text" />
            <button
              className="edit btn btn-primary "
              onClick={() => handleEditClick(task)}
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button
              className="delete btn btn-danger "
              onClick={() => handleDeleteClick(task)}
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </li>
        ))}
    </ul>
  );
}

const mapstateToProps = (state) => {
  console.log(state);
  return {
    todos: state.todos.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return {
    addToDo: (todo) => dispatch(addTodo(todo)),
    moveToCompleted: (todoList) => dispatch(moveToCompleted(todoList)),
    moveToInCompleted: (todoList) => dispatch(moveToInCompleted(todoList)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodo: (id) => dispatch(updateTodo(id)),
  };
};

export default connect(mapstateToProps, mapDispatchToProps)(TodoList);
// export default TodoList;
