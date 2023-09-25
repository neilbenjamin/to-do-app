// formSlice.js
import { createSlice } from "@reduxjs/toolkit";

//State name and setting of slice
export const formSlice = createSlice({
    //slice name
  name: "form",
  //initil state 
  initialState: {
    //initial state value
    inputValue: "",
  },
  ///Set the action to update the state slice when payload(value or DOM event is dispatched to the store)
  reducers: {
    //name of reducer to be used with dom events for passing action payloads to the store.
    //Takes 2 argument, namely the current state as defined above and the payload action
    setInputValue: (state, action) => {
    //update the state value when the action payload is dispatched and received by the reducer.
      state.inputValue = action.payload;
    },
  },
});
//export reducer actions for use in components
export const { setInputValue, addTodo } = formSlice.actions;
//export reducer to store for global state manangement.
export default formSlice.reducer;
