//Global state controller recieving all the updated slice information from the slice pages and then 
//updates the index.js with the info.
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import todosReducer from "./todosSlice";
const store = configureStore({
  reducer: {
    form: formReducer,
    todos: todosReducer,
  },
});

export default store;
