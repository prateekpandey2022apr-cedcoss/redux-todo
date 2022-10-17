function generateID() {
  return new Date().getTime().toString(36);
}

export const addTodo = (payload) => {
  // debugger;
  return {
    type: "ADD_TODO",
    payload,
  };
};

export const moveToCompleted = (payload) => {
  // debugger;
  return {
    type: "MOVE_TO_COMPLETED",
    payload,
  };
};

export const moveToInCompleted = (payload) => {
  // debugger;
  return {
    type: "MOVE_TO_INCOMPLETED",
    payload,
  };
};

export const removeTodo = (payload) => {
  // debugger;
  return {
    type: "REMOVE_TODO",
    payload,
  };
};

export const updateTodo = (payload) => {
  // debugger;
  return {
    type: "UPDATE_TASK",
    payload,
  };
};

const intialState = {
  list: [],
};

export const todoReducer = (state = intialState, action) => {
  // debugger;
  switch (action.type) {
    case "ADD_TODO":
      return {
        list: [
          ...state.list,
          { id: generateID(), text: action.payload.text, completed: false },
        ],
      };

    case "REMOVE_TODO":
      // debugger;
      return {
        list: state.list.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };

    case "MOVE_TO_COMPLETED":
      // debugger;
      return {
        list: state.list.map((todo) => {
          if (action.payload.includes(todo.id)) {
            todo.completed = true;
            return todo;
          }
          return todo;
        }),
      };

    case "MOVE_TO_INCOMPLETED":
      // debugger;
      return {
        list: state.list.map((todo) => {
          if (action.payload.includes(todo.id)) {
            todo.completed = false;
            return todo;
          }
          return todo;
        }),
      };

    case "UPDATE_TASK":
      // debugger;
      return {
        list: state.list.map((todo) => {
          if (action.payload.id === todo.id) {
            todo.text = action.payload.text;
            return todo;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
