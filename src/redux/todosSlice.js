// todosSlice.js

//This was very challenging and I relied a lot on YouTube, openAi and the Hyperion docs to get this operational.
//I built a basic todo list first with three seperate components and then it took me some time to understand the 
//levels inside the onject and how to access them.
import { createSlice } from "@reduxjs/toolkit";

//Declaring the initial state value as a variable as an object.
//This object has a nextId as it's first property with a value of two which will be used to update the new todolist as it's added.
//The next property is an data key with another object as it's value which contains two additional property key:value pairs
//which will be the content of the todolist, one being the content of the list and the other a boolean value. 

const initialToDoState = {
  nextId: 2,
  data: {
    1: {
      content: "Content",
      completed: false,
    },
  },
};//State slice using the variable declared above as the initial state
export const todosSlice = createSlice({
    //Slice name "todos"
  name: "todos",
  initialState: {
    value: initialToDoState,
  },
  //Reducer to add newtodo to the state initial state object.
  reducers: {
    addTodo: (state, action) => {
        //declares a variable with the current value of the next Id in the state slice.
      const nextId = state.value.nextId;
      //This next ID is then accessed with bracket notaion and increment to be the next number in the list.
      //The content value as assigned by the user is received as the payload and the state updated accordingly.
      //The boolean stays as is.
      state.value.data[nextId] = {
        content: action.payload,
        completed: false,
      };
      state.value.nextId++;
    },

    //This changes the initial value inpuuted by declaring a value with the new 
    //value of the content once the payload has been received.
    editTodo: (state, action) => {
      const { id, content } = action.payload;
      if (state.value.data[id]) {
        state.value.data[id].content = content;
      }
    },

    //This reducer deals with changing the boolean value to true on a certain dom event.
    completeTodo: (state, action) => {
      const id = action.payload;
      if (state.value.data[id]) {
        state.value.data[id].completed = true;
      }
    },
    //Reducer to delete the object.
    deleteTodo: (state, action) => {
      const id = action.payload;
      if (state.value.data[id]) {
        delete state.value.data[id];
      }
    },
  },
});
//Export actions for use in components 
export const { addTodo, editTodo, completeTodo, deleteTodo } = todosSlice.actions;

//Selectors to allow access to the todo value
export const selectTodos = (state) => state.todos.value.data;
//Selectors to allow access to the nextId value
export const selectNextId = (state) => state.todos.value.nextId;

//export to store for global state management
export default todosSlice.reducer;
