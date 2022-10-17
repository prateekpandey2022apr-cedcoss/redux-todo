import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  moveToCompleted,
  moveToInCompleted,
  updateTodo,
} from "./redux/todoReducer";

function Form({
  btnText,
  setBtnText,
  editId,
  setEditId,
  tasks,
  setTasks,
  inputText,
  setInputText,
  addToDo,
  updateTodo,
}) {
  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function updateTask(taskId, text) {
    setTasks(
      tasks.map((task) => {
        if (task.id == taskId) {
          task.text = text;
          return task;
        }
        return task;
      })
    );
  }

  function handleSubmitClick(event) {
    event.preventDefault();

    if (!inputText) {
      // stop if the input is empty
      // console.log("input empty");
      return;
    }

    // debugger;
    if (editId) {
      // task being updated
      updateTodo({ id: editId, text: inputText });
      setInputText("");
      setBtnText("Add");
      setEditId(0);
    } else {
      // new task is being added
      addToDo({ text: inputText });
      setInputText("");
    }
  }

  return (
    <>
      <form>
        <input
          id="new-task"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          name="task"
          defaultrequired="value"
        />
        <button onClick={handleSubmitClick} className="btn btn-primary">
          {btnText}
        </button>
      </form>
    </>
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
    updateTodo: (id) => dispatch(updateTodo(id)),
  };
};

export default connect(mapstateToProps, mapDispatchToProps)(Form);

// export default Form;
