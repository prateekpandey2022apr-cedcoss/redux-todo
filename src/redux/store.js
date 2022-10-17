import { combineReducers, createStore } from "redux";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(rootReducer);

export default store;
